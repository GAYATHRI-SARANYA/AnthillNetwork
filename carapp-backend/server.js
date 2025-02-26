const express = require('express');
const connectDB = require('./db'); 
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 5000;
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

const carRoutes = require("./routes/carRoutes");
app.use("/cars", carRoutes);


connectDB();

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
