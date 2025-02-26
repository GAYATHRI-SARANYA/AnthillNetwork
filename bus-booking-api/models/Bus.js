const mongoose = require("mongoose");

const BusSchema = new mongoose.Schema({
  busNumber: { type: String, required: true, unique: true },
  driverName: { type: String, required: true },
  capacity: { type: Number, required: true },
  availableSeats: { type: Number, required: true },
  route: { type: String, required: true },
});

module.exports = mongoose.model("Bus", BusSchema);
