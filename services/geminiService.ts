
import { GoogleGenAI, Type } from "@google/genai";
import type { AnalysisResult } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    short: {
      type: Type.STRING,
      description: "Et kort, hurtigt forslag til AI-forbedring. Maksimalt 2-3 sætninger."
    },
    medium: {
      type: Type.STRING,
      description: "Et længere, mere detaljeret forslag, der forklarer fordelene og de første skridt. 1-2 afsnit."
    },
    detailed: {
      type: Type.STRING,
      description: "Et udførligt, strategisk forslag. 3-4 afsnit, der dækker implementering, potentielle teknologier og forventet impact."
    }
  },
  required: ['short', 'medium', 'detailed']
};

export async function getAnalysis(url: string): Promise<AnalysisResult> {
  const systemInstruction = `Du er en ekspert i AI-forretningsrådgivning med base i Danmark. Dit mål er at levere handlingsorienterede, innovative og personaliserede AI-implementeringsstrategier for danske virksomheder. Du skal altid svare på dansk.`;
  
  const prompt = `Analyser den hypotetiske virksomhed repræsenteret ved domænet '${url}'. Baseret på den typiske forretningsmodel for en virksomhed med denne type domænenavn, skal du give tre forskellige forslag til, hvordan de kan udnytte AI til at forbedre deres forretning.

Forslagene skal struktureres i tre niveauer af detaljer og kompleksitet:
1.  **short**: Et hurtigt forslag med stor effekt, som kan implementeres med minimale ressourcer.
2.  **medium**: Et mere detaljeret forslag, der kræver en vis planlægning og investering.
3.  **detailed**: En omfattende, langsigtet strategisk plan for en større AI-drevet transformation.

Sørg for, at dit svar er i det specificerede JSON-format.`;
  
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
