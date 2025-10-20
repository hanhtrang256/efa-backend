# efa-backend
The backend logic of EFA Department website

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

## Running the Server

Start the server:
```bash
npm start
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

