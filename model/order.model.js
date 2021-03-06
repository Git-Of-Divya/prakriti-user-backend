const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Mobile: {
        type: Number,
        required: true,
        length: 10
    },
    Address: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    productList: [{
        productId: {
            type: Schema.Types.ObjectId,
            ref: "product"
        },
        qty: {
            type: Number,
            default: 1
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    orderStatus: {
        type: String,
        default: "pendding"
    },
    total: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        default: "Online Payment"
    }

});

module.exports = mongoose.model("order", orderSchema);