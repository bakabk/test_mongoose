const mongoose = require('mongoose')
const User = require('./models/user')
mongoose.Promise = require('bluebird')

mongoose.connect('mongodb://localhost/testmongoose', {
  useMongoClient: true
})

const db = mongoose.connection

db.on('Error', err => {
  console.log('err connection ', err)
})

db.once('open', () => {
  console.log('We are connected!')

User.findById('5a5f1e373928560bf34a6798', (err, user) => {
    console.log('result: ', err, user)
  })

  // const user = new User({name: 'Alex'})
  // console.log(user)
  // user.save( (err, createUser) => {
  //   console.log('result: ', err, createUser)
  // } )
})
