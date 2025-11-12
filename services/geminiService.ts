
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might want to handle this more gracefully.
  // For this context, we assume the API key is always available.
  console.warn("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generateTravelTip = async (topic: string): Promise<string> => {
  if (!API_KEY) {
    return "API Key is not configured. Please set the API_KEY environment variable.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Generate a concise, actionable travel tip for budget travelers on the topic of "${topic}". Focus on practical advice. Format the output as clean markdown.`,
      config: {
        systemInstruction: "You are a helpful travel assistant for cheaptic.com, specializing in budget travel advice. Provide clear, friendly, and encouraging tips.",
        temperature: 0.7,
        topP: 1,
        topK: 32,
        maxOutputTokens: 256,
      }
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating travel tip:", error);
    return "Sorry, I couldn't generate a tip at the moment. Please try again later.";
  }
};
