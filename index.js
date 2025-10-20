const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory storage for posts
let posts = [];
let nextPostId = 1;

// POST /post/create_post endpoint
app.post('/post/create_post', (req, res) => {
  try {
    const { title, content, author } = req.body;

    // Validate required fields
    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: 'Title and content are required fields'
      });
    }

    // Create new post
    const newPost = {
      id: nextPostId++,
      title,
      content,
      author: author || 'Anonymous',
      createdAt: new Date().toISOString()
    };

    posts.push(newPost);

    // Return success response
    res.status(201).json({
      success: true,
      message: 'Post created successfully',
      data: newPost
    });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// GET /post endpoint to retrieve all posts (helper endpoint for testing)
app.get('/post', (req, res) => {
  res.status(200).json({
    success: true,
    data: posts,
    count: posts.length
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
