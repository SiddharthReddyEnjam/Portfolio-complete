const mongoose = require('mongoose');
require('dotenv').config();

const db = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(db);

    console.log('MongoDB connected...');
  } catch (err) {
    console.log(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
