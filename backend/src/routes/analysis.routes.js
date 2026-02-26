import express from "express";
import { analyze, getAnalyses } from "../controllers/analysis.controller.js";

const router = express.Router();

router.post("/", analyze);
router.get("/", getAnalyses);

export default router;