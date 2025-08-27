import { GoogleGenAI } from "@google/genai";

const MODEL_NAME = "gemini-1.5-flash-8b";
const API_KEY = "YOUR_ACTUAL_API_KEY"; // Put your API key

async function runChat(prompt) {
  const genAI = new GoogleGenAI({
    apiKey: API_KEY,
  });

  const config = {
    responseMimeType: "text/plain",
  };

  const contents = [
    {
      role: "user",
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  try {
    const result = await genAI.models.generateContentStream({
      model: MODEL_NAME,
      config,
      contents,
    });

    let fullResponse = "";

    for await (const chunk of result) {
      fullResponse += chunk.text;
    }

    return fullResponse;
  } catch (error) {
    console.error("Error from Gemini API:", error);
    return "An error occurred while processing your request.";
  }
}

export default runChat;
