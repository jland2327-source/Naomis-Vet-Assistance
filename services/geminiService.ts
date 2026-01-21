
import { GoogleGenAI } from "@google/genai";

// Initialize the GoogleGenAI client with the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Retrieves pet health advice from the Gemini model.
 * @param message - The latest user query.
 * @param history - The conversation history.
 */
export async function getPetAdvice(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) {
  try {
    // Use ai.models.generateContent directly to perform text-based Q&A.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: message }]}
      ],
      config: {
        // System instructions define the model's persona and safety guidelines.
        systemInstruction: "You are a professional veterinarian assistant at Paws & Whiskers Wellness. Provide helpful, empathetic advice about pet health. Always remind the user that for emergencies or definitive diagnosis, they should visit a real vet. Keep responses concise but informative.",
        temperature: 0.7,
        topP: 0.95,
        // maxOutputTokens is omitted to allow the model to manage its thinking budget automatically.
      }
    });

    // Access the generated text using the .text property (not a function).
    return response.text || "I'm sorry, I was unable to generate advice at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please call us at (555) 123-4567 for immediate assistance.";
  }
}