const mongoose = require('mongoose');
const moment = require('moment');

const ContactSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  message: String,
  date: {
    type: Date,
    default: moment().format('YYYY-MM-DD HH:mm:ss'),
  },
});

module.exports = mongoose.model('Contact', ContactSchema);
