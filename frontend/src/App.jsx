import { useEffect, useState } from "react";
import { searchNews, analyzeArticle, getAnalyses } from "./services/api";

export default function App() {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [analyses, setAnalyses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadAnalyses();
  }, []);

  const loadAnalyses = async () => {
    try {
      const res = await getAnalyses();
      setAnalyses(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    setError(null);

    try {
      const res = await searchNews(query);
      setArticles(res.data);
    } catch (err) {
      setError("Failed to fetch news");
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyze = async (article) => {
    setLoading(true);
    setError(null);

    try {
      await analyzeArticle(article);
      await loadAnalyses();
    } catch (err) {
      setError("Failed to analyze article");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Smart Article Analyzer
        </h1>

        {/* Search Section */}
        <div className="flex gap-4 mb-6">
          <input
            className="flex-1 p-3 rounded border"
            placeholder="Search news..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-6 rounded"
          >
            Search
          </button>
        </div>

        {loading && (
          <div className="mb-4 text-gray-600">Loading...</div>
        )}

        {error && (
          <div className="mb-4 text-red-600">{error}</div>
        )}

        {/* News Results */}
        <div className="grid gap-4 mb-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white p-4 rounded shadow"
            >
              <h2 className="font-semibold text-lg">
                {article.title}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                {article.source?.name}
              </p>
              <button
                onClick={() => handleAnalyze(article)}
                className="bg-green-600 text-white px-4 py-1 rounded"
              >
                Analyze
              </button>
            </div>
          ))}
        </div>

        {/* Stored Analyses */}
        <h2 className="text-2xl font-semibold mb-4">
          Analyzed Articles
        </h2>

        <div className="grid gap-4">
          {analyses.map((item) => (
            <div
              key={item._id}
              className="bg-white p-4 rounded shadow"
            >
              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                Sentiment: {item.sentiment}
              </p>
              <p className="text-sm">
                {item.summary}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}