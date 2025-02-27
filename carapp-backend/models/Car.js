const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    name: String,
    brand: String,
    year: Number,
    price: Number,
    description: String,
    imageUrl: String
}, { timestamps: true });

module.exports = mongoose.model("Car", carSchema);
