const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();
const path = require('path');

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

app.get('/', (req, res) => res.send('Hii I am Server'));
app.use('/blog', require('./routes/blog'));
app.use('/contact', require('./routes/contact'));

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
