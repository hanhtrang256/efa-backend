const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory storage for posts
const posts = new Map();
let nextId = 1;

// Initialize with some sample data
posts.set(1, { id: 1, title: 'Sample Post', content: 'This is a sample post', category: 'general' });
nextId = 2;

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to EFA Backend' });
});

// Get all posts (helper endpoint for verification)
app.get('/posts', (req, res) => {
  const allPosts = Array.from(posts.values());
  res.json({ posts: allPosts });
});

// Get a single post (helper endpoint for verification)
app.get('/posts/:id', (req, res) => {
  const post = posts.get(Number(req.params.id));
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  res.json({ post });
});

// Edit post endpoint
app.post('/post/edit_post', (req, res) => {
  const { id, title, content, category } = req.body;

  // Validate required fields
  if (!id) {
    return res.status(400).json({ error: 'Post ID is required' });
  }

  // Check if post exists
  const post = posts.get(Number(id));
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }

  // Update post fields if provided
  if (title !== undefined) post.title = title;
  if (content !== undefined) post.content = content;
  if (category !== undefined) post.category = category;

  res.json({ message: 'Post updated successfully', post });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
