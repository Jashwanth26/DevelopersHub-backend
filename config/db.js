// config/db.js
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('DB connected');
  } catch (error) {
    console.log('Error connecting to DB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
