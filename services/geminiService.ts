import { GoogleGenAI } from "@google/genai";
import { Scenario } from '../types';

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateMakeover = async (
  base64Image: string,
  scenario: Scenario
): Promise<string> => {
  const ai = getClient();
  
  // Extract mime type from base64 string
  const mimeMatch = base64Image.match(/^data:(image\/[a-zA-Z+]+);base64,/);
  const mimeType = mimeMatch ? mimeMatch[1] : 'image/jpeg';
  
  // Clean the base64 string to remove the data URL prefix if present
  const cleanBase64 = base64Image.replace(/^data:image\/[a-zA-Z+]+;base64,/, '');

  // Revised prompt: Strictly NO TEXT generation.
  // We want a clean cinematic image.
  const prompt = `Create a cinematic Stranger Things Season 5 promotional still.
  
  SUBJECT: The person in the input image.
  
  INSTRUCTIONS:
  1. FACE IDENTITY (CRITICAL): You must preserve the facial features and identity of the input person. This is a cosplay transformation.
  2. SCENARIO: ${scenario.promptModifier}
  3. COMPOSITION: Center the subject. Create a balanced cinematic composition.
  4. TEXT RULE: DO NOT generate any text, logos, or numbers in the image. The image must be text-free.
  5. STYLE: 80s Supernatural Sci-Fi, Cinematic, Dark Fantasy, Neon Lighting, Film Grain.
  
  Make it look like a high-budget Netflix production still (not a poster with text).`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: prompt,
          },
          {
            inlineData: {
              data: cleanBase64,
              mimeType: mimeType, 
            },
          },
        ],
      },
      config: {
        // Explicitly allow supernatural/scary content by lowering safety thresholds
        safetySettings: [
          { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_ONLY_HIGH' },
          { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_ONLY_HIGH' },
          { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_ONLY_HIGH' },
          { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_ONLY_HIGH' },
        ]
      }
    });

    // Robust error handling for undefined parts
    if (!response || !response.candidates || response.candidates.length === 0) {
      throw new Error("The portal failed to open (No response candidates from Gemini).");
    }

    const candidate = response.candidates[0];

    // Check for refusal or safety blocks
    if (candidate.finishReason !== 'STOP' && candidate.finishReason !== undefined) {
       // If content is present despite non-STOP reason, we might still try to use it, 
       // but usually this indicates a filter.
       if (!candidate.content) {
          throw new Error(`Transformation blocked by Hawkins Lab protocols. Reason: ${candidate.finishReason}`);
       }
    }

    const parts = candidate.content?.parts;

    if (!parts || parts.length === 0) {
       throw new Error("The image was lost in the Upside Down (No content generated).");
    }

    // Extract image from response
    for (const part of parts) {
        if (part.inlineData && part.inlineData.data) {
            return `data:image/png;base64,${part.inlineData.data}`;
        }
    }

    // Check if there was a text response explaining why image wasn't generated
    const textPart = parts.find(p => p.text);
    if (textPart?.text) {
        throw new Error(`Transformation failed: ${textPart.text}`);
    }

    throw new Error("No image data found in the response.");

  } catch (error: any) {
    console.error("Gemini Generation Error:", error);
    
    // Handle 500 errors gracefully
    if (error.message && (error.message.includes("500") || error.message.includes("Internal error"))) {
        throw new Error("The Mind Flayer interfered (Server Error). Please try again, or try a different photo.");
    }
    
    // Preserve the original error message if it's one of ours, otherwise generic
    throw error;
  }
};