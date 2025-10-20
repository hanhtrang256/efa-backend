const express = require('express');
const postRoutes = require('./routes/posts');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/posts', postRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'EFA Backend API',
    endpoints: {
      '- GET /api/posts': 'Get all posts',
      '- GET /api/posts/:id': 'Get a specific post',
      '   + GET /api/posts/:id?view=summary': 'Post metadata',
      '   + GET /api/posts/:id?view=detail': 'Post detail',
      '- POST /api/posts': 'Create a new post',
      '- PUT /api/posts/:id': 'Update a post',
      '- DELETE /api/posts/:id': 'Delete a post'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
