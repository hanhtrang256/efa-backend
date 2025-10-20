const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory storage for posts
const posts = new Map();
let nextId = 1;

// Initialize with some sample data
posts.set(1, { id: 1, title: 'Sample Post', content: 'This is a sample post', category: 'general' });
nextId = 2;

// Root endpoint
// Middleware to parse JSON
app.use(express.json());

// Sample post data (in a real application, this would come from a database)
const posts = {
  '1': {
    id: '1',
    title: 'Introduction to Node.js',
    content: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. It allows developers to use JavaScript on the server-side, enabling full-stack JavaScript development. Node.js is event-driven, non-blocking, and highly scalable, making it ideal for building fast and efficient server-side applications. With its rich ecosystem of packages available through npm, Node.js has become one of the most popular platforms for building modern web applications and APIs.',
    excerpt: 'Learn about the basics of Node.js and why it\'s popular for backend development.',
    createdAt: '2025-01-15T10:30:00Z',
    views: 1250
  },
  '2': {
    id: '2',
    title: 'Getting Started with Express',
    content: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of building server-side applications by providing useful utilities and middleware. Express handles routing, request processing, and response generation with ease. It\'s the de facto standard for building APIs in Node.js and is used by countless companies worldwide. With Express, you can quickly set up routes, handle different HTTP methods, and integrate middleware for authentication, logging, and more.',
    excerpt: 'Express makes it easy to build web applications and APIs with Node.js.',
    createdAt: '2025-02-20T14:15:00Z',
    views: 890
  },
  '3': {
    id: '3',
    title: 'Understanding REST APIs',
    content: 'REST (Representational State Transfer) is an architectural style for designing networked applications. It relies on a stateless, client-server communication protocol, typically HTTP. REST APIs use standard HTTP methods like GET, POST, PUT, DELETE to perform CRUD operations. RESTful services are designed to be simple, scalable, and easy to maintain. They use URL paths to represent resources and HTTP status codes to communicate the result of operations. REST has become the standard way to build web services because of its simplicity and compatibility with web technologies.',
    excerpt: 'REST APIs are the standard way to build modern web services.',
    createdAt: '2025-03-10T09:45:00Z',
    views: 2100
  }
};

// Helper function to get the first N words from content
function getFirstWords(text, wordCount = 20) {
  const words = text.split(/\s+/);
  return words.slice(0, wordCount).join(' ') + (words.length > wordCount ? '...' : '');
}

// GET /posts/:id endpoint with query parameter support
app.get('/posts/:id', (req, res) => {
  const postId = req.params.id;
  const view = req.query.view || 'detail'; // default to detail view

  const post = posts[postId];

  if (!post) {
    return res.status(404).json({
      error: 'Post not found',
      message: `No post found with id: ${postId}`
    });
  }

  if (view === 'summary') {
    // Summary view: title, date created, views, excerpt, and first few text
    return res.json({
      id: post.id,
      title: post.title,
      createdAt: post.createdAt,
      views: post.views,
      excerpt: post.excerpt,
      preview: getFirstWords(post.content, 20)
    });
  } else if (view === 'detail') {
    // Detail view: full post
    return res.json({
      id: post.id,
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      createdAt: post.createdAt,
      views: post.views
    });
  } else {
    // Invalid view parameter
    return res.status(400).json({
      error: 'Invalid view parameter',
      message: 'View parameter must be either "summary" or "detail"',
      allowedValues: ['summary', 'detail']
    });
  }
});

// Root endpoint for health check
app.get('/', (req, res) => {
  res.json({
    message: 'EFA Backend API',
    version: '1.0.0',
    endpoints: {
      posts: {
        summary: 'GET /posts/:id?view=summary',
        detail: 'GET /posts/:id?view=detail'
      }
    }
  });
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
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Access the API at http://localhost:${PORT}`);
});

module.exports = app;
