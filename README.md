# Smart Article Analyzer

A full-stack single-page application that:

- Fetches real-time news articles
- Uses a GenAI API to generate a summary and sentiment analysis
- Stores results in MongoDB
- Displays analyzed articles clearly in the UI

---

## Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express
- Mongoose
- MongoDB Atlas

### External APIs
- GNews API (news search)
- Google Gemini API (summary + sentiment)

---

## Project Structure

```
smart-article-analyzer/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── app.js
│   │   └── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
└── docs/
```

---

# Prerequisites

- Node.js v18+ (v20 recommended)
- npm
- MongoDB Atlas account
- GNews API key
- Google Gemini API key

---

# Environment Variables

## Backend

Create a file:

```
backend/.env
```

Add the following:

```
PORT=3001
MONGODB_URI=your_mongodb_connection_string
GNEWS_API_KEY=your_gnews_api_key
GEMINI_API_KEY=your_gemini_api_key
```

---

# Installation & Running Locally

## 1️⃣ Clone the Repository

```
git clone <your-repo-url>
cd smart-article-analyzer
```

---

## 2️⃣ Install Backend Dependencies

```
cd backend
npm install
```

Start backend server:

```
npm run dev
```

Backend will run on:

```
http://localhost:3001
```

---

## 3️⃣ Install Frontend Dependencies

Open a new terminal:

```
cd frontend
npm install
```

Start frontend:

```
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

# Application Flow

1. Search for news articles using the GNews API.
2. Select an article and click **Analyze**.
3. The backend:
   - Calls Gemini API
   - Generates summary + sentiment
   - Stores result in MongoDB
4. The frontend:
   - Updates immediately
   - Displays the analyzed article
   - Prevents duplicate analysis
   - Shows loading and success states

---

# Design Decisions

- Single Gemini call used for both summary and sentiment to minimize API usage.
- DTO normalization performed before sending data to backend to ensure schema integrity.
- State updated immediately after analysis to avoid unnecessary re-fetching.
- Per-article loading state implemented for better UX.
- Duplicate analyses prevented at UI level.

---

# Notes

If more time were available, potential improvements would include:

-  
- Pagination for analyzed articles
- Deployment to a free-tier hosting provider
- Automated testing
- Environment-based configuration for production

---

# Contact

If there are any issues running the project, please reach out.
alfonsogambino@protonmail.com