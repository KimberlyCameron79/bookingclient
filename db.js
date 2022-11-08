const mongoose = require("mongoose");

const mongoURL ='mongodb+srv://kimberlycam43:Kc0370%24%24@cluster0.xbzyqi5.mongodb.net/mern-airbnb'

mongoose.connect(mongoURL, {useUnifiedTopology : true , useNewUrlParser:true})

const connection = mongoose.connection

connection.on('error', () => {
    console.log('Mongo DB Connection failed')
})

connection.on('connected' , () => {
    console.log('Mongo DB Connection Successful')
})


module.exports = mongoose