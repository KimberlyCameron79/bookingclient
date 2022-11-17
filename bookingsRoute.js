const express = require('express');
const router = express.Router();
const Booking = require("../models/Bookingm");
const moment = require("moment");
// const {  Room } = require('../bookingclient/src/components/Room');
const room = require('../models/Room');
router.post("/bookroom", async(req, res) => {
    const { room,
        userid,
        fromdate,
        todate,
        totalamount,
        totaldays } = req.body

        try {
            const newbooking = new Booking ({
                room:room.name,
                roomid: room._id,
                userid,
                fromdate:  moment(fromdate).format('MM-DD-YYYY'),
                todate: moment(todate).format('MM-DD-YYYY'),
                totalamount,
                totaldays,
                transactionId : '1234'

            })
            //Updating the rooms
            const booking = await newbooking.save()
            

            const roomtemp = await room.findOne({ id: room._id })

            roomtemp.currentbookings.push({
                bookingid : booking._id, 
                fromdate : moment(fromdate).format('MM-DD-YYYY'), 
                todate: moment(todate).format('MM-DD-YYYY'),
                userid: userid,
                status: booking.status
            });

            await roomtemp.save()
            res.send('Room Booked Successfully')
        } catch (error) {
           return res.status(400).json({ error});
        }
});

module.exports= router;