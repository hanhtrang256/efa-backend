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

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation
## Features

This backend API provides endpoints to retrieve post information in different views:
- **Summary view**: Returns post metadata including title, date created, views, excerpt, and a preview of the content
- **Detail view**: Returns the complete post information with full content

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Usage

Start the server:

### Running the Server
## Running the Server

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
The server will start on port 3000 by default (or the port specified in the PORT environment variable).

## API Endpoints

### Create Post
Creates a new post.

**Endpoint:** `POST /post/create_post`
The server will run on port 3000 by default.

### API Endpoints

- `GET /` - Root endpoint that returns a welcome message
- `GET /posts` - Get all posts (helper endpoint for verification)
- `GET /posts/:id` - Get a single post by ID (helper endpoint for verification)
- `POST /post/edit_post` - Edit an existing post

#### Edit Post
**Endpoint:** `POST /post/edit_post`

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
  "content": "Post content goes here",
  "author": "Author Name (optional)"
}
```

**Success Response (201):**
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
    "content": "Post content goes here",
    "author": "Author Name",
    "createdAt": "2025-10-20T01:40:00.000Z"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Title and content are required fields"
}
```

### Get All Posts
Retrieves all posts.

**Endpoint:** `GET /post`
  "id": 1,
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
**Response (Success):**
```json
{
  "message": "Post updated successfully",
  "post": {
    "id": 1,
    "title": "Updated Title",
    "content": "Updated content",
    "category": "updated-category"
  }
}
```

**Response (Error - Post Not Found):**
```json
{
  "error": "Post not found"
}
```

**Response (Error - Missing ID):**
```json
{
  "error": "Post ID is required"
}
```
  "id": 1
}
```

**Success Response (200):**
```json
{
  "success": true,
  "data": [...],
  "count": 0
}
```

### Health Check
Check if the server is running.

**Endpoint:** `GET /health`

**Success Response (200):**
```json
{
  "status": "OK"
}
```
  "message": "Post deleted successfully",
  "deletedPost": {
    "id": 1,
    "title": "First Post",
    "content": "This is the first post",
    "category": "general"
  }
}
```

**Error Responses:**
- `400 Bad Request` - When post ID is not provided
  ```json
  {
    "success": false,
    "message": "Post ID is required"
  }
  ```
- `404 Not Found` - When post with given ID doesn't exist
  ```json
  {
    "success": false,
    "message": "Post not found"
  }
  ```

**Example:**
```bash
curl -X DELETE http://localhost:3000/post/delete_post \
  -H "Content-Type: application/json" \
  -d '{"id": 1}'
```

The server will run on `http://localhost:3000` by default.

## API Endpoints

### Get Post by ID

**Endpoint:** `GET /posts/{id}`

**Query Parameters:**
- `view` (optional): Determines the amount of information returned
  - `summary`: Returns post metadata and preview
  - `detail` (default): Returns full post information

#### Summary View

**Request:**
```bash
GET /posts/1?view=summary
```

**Response:**
```json
{
  "id": "1",
  "title": "Introduction to Node.js",
  "createdAt": "2025-01-15T10:30:00Z",
  "views": 1250,
  "excerpt": "Learn about the basics of Node.js and why it's popular for backend development.",
  "preview": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to use JavaScript on the server-side,..."
}
```

#### Detail View

**Request:**
```bash
GET /posts/1?view=detail
```

**Response:**
```json
{
  "id": "1",
  "title": "Introduction to Node.js",
  "content": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to use JavaScript on the server-side, enabling full-stack JavaScript development. Node.js is event-driven, non-blocking, and highly scalable, making it ideal for building fast and efficient server-side applications. With its rich ecosystem of packages available through npm, Node.js has become one of the most popular platforms for building modern web applications and APIs.",
  "excerpt": "Learn about the basics of Node.js and why it's popular for backend development.",
  "createdAt": "2025-01-15T10:30:00Z",
  "views": 1250
}
```

### Error Handling

**Invalid Post ID:**
```json
{
  "error": "Post not found",
  "message": "No post found with id: 999"
}
```

**Invalid View Parameter:**
```json
{
  "error": "Invalid view parameter",
  "message": "View parameter must be either \"summary\" or \"detail\"",
  "allowedValues": ["summary", "detail"]
}
```

## Available Posts

The API currently includes sample data for posts with IDs: 1, 2, and 3.

## Technology Stack

- Node.js
- Express.js

