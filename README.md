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
- `GET /posts` - Get all posts (helper endpoint for verification)
- `GET /posts/:id` - Get a single post by ID (helper endpoint for verification)
- `POST /post/edit_post` - Edit an existing post

#### Edit Post
**Endpoint:** `POST /post/edit_post`

**Request Body:**
```json
{
  "id": 1,
  "title": "Updated Title",
  "content": "Updated content",
  "category": "updated-category"
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

