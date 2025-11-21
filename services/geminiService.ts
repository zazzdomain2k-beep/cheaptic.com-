
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateTravelTip = async (topic: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Generate a concise, actionable travel tip for budget travelers on the topic of "${topic}". Focus on practical advice. Format the output as clean markdown.`,
      config: {
        systemInstruction: "You are a helpful travel assistant for cheaptic.com, specializing in budget travel advice. Provide clear, friendly, and encouraging tips.",
        temperature: 0.7,
        topP: 1,
        topK: 32,
      }
    });
    
    return response.text || "Sorry, I couldn't generate a tip at this time.";
  } catch (error) {
    console.error("Error generating travel tip:", error);
    return "Sorry, I couldn't generate a tip at the moment. Please try again later.";
  }
};