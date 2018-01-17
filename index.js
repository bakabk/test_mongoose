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
  //begin
  console.log('We are connected!')

//создание и сохранение записи
  // const user = new User({name: 'Bill', country: 'US'})
  // user.save( (err, createUser) => {
  //   console.log('data saved: ', err, createUser)
  // } )

  User.findUserByName('alex', (err, user) => {
    // console.log(err, user)
    user.findSimilarUsersByCountry( (err, users) => {
      console.log(err, users)
    })
  })

  //end
})
