# efa-backend
The backend logic of EFA Department website

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Running the Server

Start the server:
```bash
npm start
```

The server will run on port 3000 by default.

### API Endpoints

- `GET /` - Root endpoint that returns a welcome message
- `GET /post/list` - List all posts
- `DELETE /post/delete_post` - Delete a post by ID

#### DELETE /post/delete_post

Deletes a post from the system.

**Request Body:**
```json
{
  "id": 1
}
```

**Success Response (200):**
```json
{
  "success": true,
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

