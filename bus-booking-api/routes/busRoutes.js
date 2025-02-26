const express = require("express");
const { addBus, getBuses } = require("../controllers/busController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


router.post("/add", authMiddleware, addBus);


router.get("/all", getBuses);

module.exports = router;
