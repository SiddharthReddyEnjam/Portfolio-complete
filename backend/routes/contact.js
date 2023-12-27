const express = require('express');
const router = express.Router();

const ContactForm = require('../models/ContactSchema');

router.post('/', async (req, res) => {
  try {
    const { fullName, email, message } = req.body;
    const newContact = new ContactForm({ fullName, email, message });
    await newContact.save();
    res.json(newContact);
  } catch (error) {
    res.status(500).json({ error: 'Failed to send details' });
  }
});

module.exports = router;
