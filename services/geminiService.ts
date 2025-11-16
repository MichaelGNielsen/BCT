import { GoogleGenAI, Type } from "@google/genai";
import type { AnalysisResult } from '../types';

// Use process.env.API_KEY as required by the execution environment.
const apiKey = process.env.API_KEY;
if (!apiKey) {
  throw new Error("API_KEY is not defined in the environment.");
}

const ai = new GoogleGenAI({ apiKey });

const getLanguageName = (code: string): string => {
  const names: { [key: string]: string } = {
    da: 'Danish',
    en: 'English',
    fr: 'French',
    de: 'German',
    it: 'Italian',
    ru: 'Russian',
    uk: 'Ukrainian',
  };
  return names[code] || 'Danish';
};


export async function getAnalysis(url: string, language: string): Promise<AnalysisResult> {
  const languageName = getLanguageName(language);
  
  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      short: {
        type: Type.STRING,
        description: `A short, quick suggestion for AI improvement. Max 2-3 sentences. (in ${languageName})`
      },
      medium: {
        type: Type.STRING,
        description: `A longer, more detailed suggestion explaining benefits and first steps. 1-2 paragraphs. (in ${languageName})`
      },
      detailed: {
        type: Type.STRING,
        description: `A comprehensive, strategic proposal. 3-4 paragraphs covering implementation, potential technologies, and expected impact. (in ${languageName})`
      }
    },
    required: ['short', 'medium', 'detailed']
  };

  const systemInstruction = `You are an expert AI business consultant. Your goal is to provide actionable, innovative, and personalized AI implementation strategies for businesses. You must always respond in ${languageName}.`;
  
  const prompt = `Analyze the hypothetical business represented by the domain '${url}'. Based on the typical business model for a company with this type of domain name, provide three different suggestions on how they can leverage AI to improve their business.

The suggestions must be structured in three levels of detail and complexity:
1.  **short**: A quick, high-impact suggestion that can be implemented with minimal resources.
2.  **medium**: A more detailed proposal requiring some planning and investment.
3.  **detailed**: A comprehensive, long-term strategic plan for a major AI-driven transformation.

Ensure your entire response is in ${languageName} and adheres to the specified JSON format.`;
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.7,
      },
    });
    
    const jsonText = response.text.trim();
    const result = JSON.parse(jsonText) as AnalysisResult;
    
    if (!result.short || !result.medium || !result.detailed) {
        throw new Error("Incomplete analysis received from API.");
    }

    return result;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get analysis from AI service.");
  }
}