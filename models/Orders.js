const mongoose = require("mongoose")


//create schema
const OrderSchema = new mongoose.Schema({
    email : {
        type : String ,
        required : true,
        unique: true
    },
    order_data : {
        type : Array,
        require:true
    }
})


//crete model
const order = mongoose.model('order' , OrderSchema);

module.exports = order;