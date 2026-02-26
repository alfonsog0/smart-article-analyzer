import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001/api",
});

export const searchNews = (query) =>
  API.get(`/news?q=${query}`);

export const analyzeArticle = (article) =>
  API.post("/analyze", article);

export const getAnalyses = () =>
  API.get("/analyze");