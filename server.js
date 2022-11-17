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


app.post("/auth/login", async (req, res) => {
    const { email, password } = req.body
    console.log('running')

    try {
        const user = await User.findOne({ email: email, password: password })
        if (user) {
            res.send(user)
        }
        else {
            return res.status(400).json({ message: "Login Failed" });
        }
    } catch (error) {
        return res.status(400).json({ error });

    }
}

);
//creates access to routes
app.use('/api/rooms', roomsRoute)
app.use('/api/users', usersRoute)
app.use('/api/bookings', bookingsRoute)


const port = 8080;

// dbConfig();

app.listen(port, () => console.log(`Node server started using nodemon`));