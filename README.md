# efa-backend
The backend logic of EFA Department website

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation
```bash
npm install
```

### Running the Server
```bash
npm start
```

The server will start on port 3000 by default (or the port specified in the PORT environment variable).

## API Endpoints

### Create Post
Creates a new post.

**Endpoint:** `POST /post/create_post`

**Request Body:**
```json
{
  "title": "Post Title",
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
