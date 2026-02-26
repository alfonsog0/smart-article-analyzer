import express from "express";
import { searchNews } from "../controllers/news.controller.js";

const router = express.Router();

router.get("/", searchNews);

export default router;