# Talent App 🎬

An interactive platform for discovering talents, learning from YouTube tutorials, sharing your own talent videos, and receiving AI-powered feedback. Features a multi-language interface and global leaderboard.

## ✨ Features

- 🎥 **YouTube Tutorials**: Curated tutorial videos for every talent
- 📹 **Video Submission**: Upload and share your talent performance videos
- 🤖 **AI Feedback**: Get genuine, constructive feedback powered by AI
- 🌍 **Multi-Language Support**: Access content and feedback in your preferred language
- 🏆 **Leaderboard**: See who's doing best in each talent category
- 👥 **Community Engagement**: View other users' videos and performances

## 🛠️ Tech Stack

### Backend
- Node.js + Express
- MongoDB
- OpenAI/Gemini API for AI feedback
- YouTube Data API v3
- AWS S3 for video storage
- JWT for authentication

### Frontend
- React.js with TypeScript
- Redux for state management
- Tailwind CSS for styling
- React Query for data fetching

## 📦 Installation

### Prerequisites
- Node.js 14+
- MongoDB
- API Keys: YouTube, OpenAI/Gemini, AWS S3

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Add your API keys to .env
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
cp .env.example .env.local
npm start
```

## 📁 Project Structure

```
talent-app/
├── backend/          # Node.js/Express API
├── frontend/         # React frontend
├── .env.example      # Environment variables template
└── README.md         # This file
```

## 🚀 Getting Started

1. Clone the repository
2. Copy `.env.example` to `.env` and add your API keys
3. Install dependencies for backend and frontend
4. Start the backend: `npm run dev` in `/backend`
5. Start the frontend: `npm start` in `/frontend`

## 📝 API Documentation

See `/backend/docs` for detailed API endpoints.

## 🤝 Contributing

Contributions are welcome! Please create a feature branch and submit a pull request.

## 📄 License

MIT License
