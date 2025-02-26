const express = require("express");
const Car = require("../models/Car");

const router = express.Router();


router.post("/add", async (req, res) => {
    try {
        const car = new Car(req.body);
        await car.save();
        res.status(201).json({ message: "Car added successfully" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.put("/update/:id", async (req, res) => {
    try {
        await Car.findByIdAndUpdate(req.params.id, req.body);
        res.json({ message: "Car updated successfully" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.get("/", async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.delete("/:id", async (req, res) => {
    try {
        await Car.findByIdAndDelete(req.params.id);
        res.json({ message: "Car deleted successfully" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
