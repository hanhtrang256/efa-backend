# efa-backend
The backend logic of EFA Department website

## Features

- Create new posts
- Edit existing posts
- Delete posts
- Posts have category tags
- RESTful API design
- In-memory data storage
- Comprehensive error handling

## Installation

```bash
npm install
```

## Usage

Start the server:

```bash
npm start
```

The server will run on port 3000 (or the port specified in the PORT environment variable).

## API Endpoints

### Get All Posts
```
GET /api/posts
```

Returns all posts with their categories.

**Response:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 1,
      "title": "Post Title",
      "content": "Post content",
      "category": "technology",
      "createdAt": "2025-10-20T01:41:36.849Z",
      "updatedAt": "2025-10-20T01:42:13.957Z"
    }
  ]
}
```

### Get Single Post
```
GET /api/posts/:id
```

Returns a specific post by ID.

### Create New Post
```
POST /api/posts
```

**Request Body:**
```json
{
  "title": "Post Title",
  "content": "Post content",
  "category": "technology"
}
```

**Note:** `title` and `content` are required. `category` is optional (defaults to "uncategorized").

**Response:**
```json
{
  "success": true,
  "message": "Post created successfully",
  "data": {
    "id": 1,
    "title": "Post Title",
    "content": "Post content",
    "category": "technology",
    "createdAt": "2025-10-20T01:41:36.849Z",
    "updatedAt": "2025-10-20T01:41:36.849Z"
  }
}
```

### Update Post
```
PUT /api/posts/:id
```

**Request Body:**
```json
{
  "title": "Updated Title",
  "content": "Updated content",
  "category": "updated-category"
}
```

**Note:** All fields are optional. Only include fields you want to update.

### Delete Post
```
DELETE /api/posts/:id
```

Deletes a post by ID.

**Response:**
```json
{
  "success": true,
  "message": "Post deleted successfully",
  "data": {
    "id": 3,
    "title": "Deleted Post",
    "content": "This was deleted",
    "category": "uncategorized",
    "createdAt": "2025-10-20T01:41:52.455Z",
    "updatedAt": "2025-10-20T01:41:52.455Z"
  }
}
```

## Testing

You can test the API using curl:

```bash
# Create a post
curl -X POST http://localhost:3000/api/posts \
  -H "Content-Type: application/json" \
  -d '{"title": "My Post", "content": "Post content", "category": "technology"}'

# Get all posts
curl http://localhost:3000/api/posts

# Get a specific post
curl http://localhost:3000/api/posts/1

# Update a post
curl -X PUT http://localhost:3000/api/posts/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Title", "category": "updated-category"}'

# Delete a post
curl -X DELETE http://localhost:3000/api/posts/1
```

## Project Structure

```
efa-backend/
├── controllers/
│   └── postsController.js    # Business logic for posts
├── routes/
│   └── posts.js              # Post routes
├── server.js                 # Main server file
├── package.json              # Project dependencies
└── README.md                 # Documentation
```

## Error Handling

The API provides meaningful error messages:
- `400 Bad Request` - Missing required fields
- `404 Not Found` - Post not found
- `500 Internal Server Error` - Server errors

All responses follow this format:
```json
{
  "success": false,
  "message": "Error description"
}
```
