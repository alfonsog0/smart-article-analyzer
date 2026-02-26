import Analysis from "../models/analysis.model.js";
import { analyzeArticleWithLLM } from "./llm.service.js";

export const analyzeArticle = async (article) => {
  // Check if already analyzed
  const existing = await Analysis.findOne({ url: article.url });

  if (existing) {
    return existing;
  }

  const llmResult = await analyzeArticleWithLLM(
    article.title,
    article.description || ""
  );

  const saved = await Analysis.create({
    title: article.title,
    url: article.url,
    source: article.source,
    publishedAt: article.publishedAt,
    summary: llmResult.summary,
    sentiment: llmResult.sentiment
  });

  return saved;
};