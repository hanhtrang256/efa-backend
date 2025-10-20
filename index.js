const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory data store for posts
let posts = [
  { id: 1, title: 'First Post', content: 'This is the first post', category: 'general' },
  { id: 2, title: 'Second Post', content: 'This is the second post', category: 'news' }
];
let nextId = 3;

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to EFA Backend' });
});

// GET /post/list - List all posts (for testing purposes)
app.get('/post/list', (req, res) => {
  res.json({ 
    success: true, 
    posts: posts,
    count: posts.length
  });
});

// DELETE /post/delete_post - Delete a post
app.delete('/post/delete_post', (req, res) => {
  const { id } = req.body;

  // Validate that id is provided
  if (!id) {
    return res.status(400).json({ 
      success: false, 
      message: 'Post ID is required' 
    });
  }

  // Find the post index
  const postIndex = posts.findIndex(post => post.id === parseInt(id));

  // Check if post exists
  if (postIndex === -1) {
    return res.status(404).json({ 
      success: false, 
      message: 'Post not found' 
    });
  }

  // Remove the post
  const deletedPost = posts.splice(postIndex, 1)[0];

  res.json({ 
    success: true, 
    message: 'Post deleted successfully',
    deletedPost: deletedPost
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
