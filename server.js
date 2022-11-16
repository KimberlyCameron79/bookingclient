const express = require("express");
const cors = require('cors')
const app = express();
require('dotenv').config()
const dbConfig = require('./db')
const roomsRoute = require('./routes/roomsRoute')
const usersRoute = require('./routes/usersRoute')
const bookingsRoute = require('./routes/bookingsRoute')
app.use(cors())
app.use(express.json())

//creates access to routes
app.use('/api/rooms', roomsRoute)
app.use('/api/users', usersRoute)
app.use('/api/bookings', bookingsRoute)


const port= process.env.PORT || 5000;

// dbConfig();

app.listen(port, () => console.log(`Node server started using nodemon`));