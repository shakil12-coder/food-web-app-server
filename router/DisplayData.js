const express = require('express');
const router = express.Router();

router.post('/foodData' , (req , res) => {
    try {
        // console.log(global.food_items);
        // console.log(global.food_category)
        res.send([global.food_items , global.food_category]);
    } catch (error) {
        res.send("Server Error");
    }
})

module.exports=router