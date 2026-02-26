import { analyzeArticle } from "../services/analysis.service.js";
import Analysis from "../models/analysis.model.js";

export const analyze = async (req, res) => {
  const article = req.body;

  if (!article || !article.url || !article.title) {
    return res.status(400).json({ error: "Invalid article payload" });
  }

  try {
    const result = await analyzeArticle(article);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAnalyses = async (req, res) => {
  try {
    const results = await Analysis.find().sort({ createdAt: -1 });
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch analyses" });
  }
};