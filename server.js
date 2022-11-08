const express = require("express");

const app = express();

const dbConfig = require('./db')
const roomsRoute = require('./routes/roomsRoute')

//creates access to routes
app.use('/api/rooms', roomsRoute)

const port= process.env.PORT || 5000;

// dbConfig();

app.listen(port, () => console.log(`Node server started using nodemon`));