const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/user')

const app = express()

app.get('/user', (req, res) => {
    User.findUserByName('test', (err, user) => {
      res.json(user)
    })
})

app.get('/save/:name', (req, res) => {
    const user = new User({name: 'test', country: 'US'})
    user.save( (err, createUser) => {
      console.log('data saved: ', err, createUser)
    } )
})

const port = 3999
const startServer = () => {
  app.listen(port)
  console.log(`App started on port ${port}`)
}
const connectDb = () => {
  mongoose.Promise = require('bluebird')

  const options = {
    useMongoClient: true
  }

  mongoose.connect('mongodb://localhost/testmongoose', options)
  return mongoose.connection
}

connectDb()
  .on('error', console.log)
  .on('disconnected', console.log)
  .once('open', startServer)
