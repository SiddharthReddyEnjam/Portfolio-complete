const mongoose = require('mongoose');
const moment = require('moment');
// const currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss');
// Define the blog post schema
const BlogSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: {
    type: Date,
    default: moment().format('YYYY-MM-DD HH:mm:ss'),
  },
});

// Create the blog post model
module.exports = BlogPost = mongoose.model('BlogPost', BlogSchema);
