import axios from "axios";

const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

export const analyzeArticleWithLLM = async (title, content) => {
  const prompt = `
You are a news analysis assistant.

Summarize the following article in 5-6 sentences.
Then classify the overall sentiment as one of:
positive, neutral, or negative.

Return STRICTLY valid JSON in this format:

{
  "summary": "string",
  "sentiment": "positive | neutral | negative"
}

Article title:
${title}

Article content:
${content}
`;

  try {
    const response = await axios.post(
      `${GEMINI_URL}?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ]
      }
    );

    const rawText =
      response.data.candidates[0].content.parts[0].text;

    // Extract JSON safely
    const jsonStart = rawText.indexOf("{");
    const jsonEnd = rawText.lastIndexOf("}") + 1;

    const jsonString = rawText.slice(jsonStart, jsonEnd);

    return JSON.parse(jsonString);

  } catch (error) {
    console.error(
      "Gemini error:",
      error.response?.data || error.message
    );
    throw new Error("LLM analysis failed");
  }
};