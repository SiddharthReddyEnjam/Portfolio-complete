const express = require('express');
const router = express.Router();

const Post = require('../models/BlogPost');

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = new Post({ title, content });
    await newPost.save();
    res.json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create a new blog post' });
  }
});

module.exports = router;
