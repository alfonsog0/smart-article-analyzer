import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY missing in environment");
}

if (!process.env.GNEWS_API_KEY) {
  throw new Error("GNEWS_API_KEY missing in environment");
}

const PORT = process.env.PORT || 3001;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();