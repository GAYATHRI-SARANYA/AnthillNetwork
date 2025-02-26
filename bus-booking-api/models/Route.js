const mongoose = require("mongoose");

const RouteSchema = new mongoose.Schema({
  routeName: { type: String, required: true },
  startPoint: { type: String, required: true },
  endPoint: { type: String, required: true },
  stops: [{ type: String }], 
});

module.exports = mongoose.model("Route", RouteSchema);
