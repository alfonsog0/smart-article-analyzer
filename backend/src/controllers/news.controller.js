import { fetchNews } from "../services/news.service.js";

export const searchNews = async (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: "Query parameter q required" });
  }

  try {
    const articles = await fetchNews(q);
    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
};