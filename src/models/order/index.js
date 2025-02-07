const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    date: Date,
    customer: String,
    id_pipedrive: Number,
    order_value: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }    
  })

module.exports = mongoose.model('orders', OrderSchema);