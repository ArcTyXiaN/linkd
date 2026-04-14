# linkd

A modern messaging application built with Next.js, React, and MongoDB. Share and manage text and link messages with a clean, intuitive interface.

## Features

- Send text messages and links
- Real-time message refresh
- Messages stored in MongoDB
- Full-stack TypeScript support
- Clean and responsive UI

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Development**: ESLint, Babel React Compiler

## Prerequisites

- Node.js 18+ 
- npm or yarn
- MongoDB instance (local or cloud)

## Installation

1. Clone the repository:
```bash
git clone <https://github.com/ArcTyXiaN/linkd.git>
cd linkd
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with your MongoDB connection string:
```env
MONGODB_URI=your_mongodb_connection_string
```

## Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Build

Create an optimized production build:
```bash
npm run build
npm start
```

## Project Structure

```
linkd/
├── app/
│   ├── page.tsx           # Main dashboard page
│   ├── layout.tsx         # Root layout component
│   └── api/
│       └── messages/
│           └── route.ts   # Messages API endpoint
├── components/
│   ├── MessageList.tsx    # Display messages
│   └── MessageInput.tsx   # Input form for new messages
├── lib/
│   └── db.ts              # Database connection setup
├── models/
│   └── Message.ts         # Mongoose Message schema
└── public/                # Static assets
```

## API Endpoints

### GET `/api/messages`
Fetch all messages from the database.

**Response:**
```json
[
  {
    "_id": "...",
    "text": "message content",
    "type": "text",
    "createdAt": "2026-04-14T..."
  }
]
```

### POST `/api/messages`
Create a new message.

**Request Body:**
```json
{
  "text": "message content",
  "type": "text" | "link"
}
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT
"# linkd" 
