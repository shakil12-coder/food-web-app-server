const express = require('express')
const router = express.Router();
// const Order = require('../models/Orders.js');
const Order = require('../models/Orders')

router.post('/orderData', async (req, res) => {
    let data = req.body.order_data;
    await data.splice(0, 0, { order_date: req.body.order_date })
    let email = await Order.findOne({ 'email': req.body.email })
    // console.log(email);
    if (email === null) {
        try {
            await Order.create({
                email: req.body.email,
                order_data: [data]
            }).then(() => {
                res.status(200).json({ success: true }); 
            });
        } catch (error) {
            console.log("this is your error" , error.message);
            res.status(500).send("Server Error"); 
        }
        
    }

    else {
        try {
            await Order.findOneAndUpdate({ email: req.body.email },
                { $push: { order_data: data } }).then(() => {
                    res.json({ success: true })
                })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)
        }
    }

})


router.post('/myOrderData', async (req, res) => {
    try {
        let my_data = await Order.findOne({ 'email': req.body.email })
        res.json({ orderData: my_data });

    } catch (error) {
        console.log('error is ', error);
        res.send("Server Error", error.message)
    }
})

module.exports = router