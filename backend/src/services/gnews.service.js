import axios from "axios";

const GNEWS_BASE_URL = "https://gnews.io/api/v4/search";

export const fetchNews = async (query) => {
  try {
    const response = await axios.get(GNEWS_BASE_URL, {
      params: {
        q: query,
        lang: "en",
        max: 10,
        token: process.env.GNEWS_API_KEY
      }
    });

    return response.data.articles.map(article => ({
      title: article.title,
      description: article.description,
      url: article.url,
      source: article.source.name,
      publishedAt: article.publishedAt
    }));

  } catch (error) {
    console.error("GNews API error:", error.response?.data || error.message);
    throw new Error("Failed to fetch news");
  }
};