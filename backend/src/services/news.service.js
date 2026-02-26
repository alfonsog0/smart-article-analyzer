import axios from "axios";

export const fetchNews = async (query) => {
  const url = `https://gnews.io/api/v4/search?q=${query}&lang=en&max=10&apikey=${process.env.GNEWS_API_KEY}`;

  const response = await axios.get(url);

  return response.data.articles;
};