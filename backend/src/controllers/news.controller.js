import { fetchNews } from "../services/gnews.service.js";

export const getNews = async (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: "Query parameter 'q' is required" });
  }

  try {
    const articles = await fetchNews(q);
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};