const Bus = require("../models/Bus");


exports.addBus = async (req, res) => {
  try {
    const { name, route, seats, price } = req.body;
    const newBus = new Bus({ name, route, seats, price });
    await newBus.save();
    res.json({ message: "Bus added successfully!", bus: newBus });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getBuses = async (req, res) => {
  try {
    const buses = await Bus.find();
    res.json(buses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
