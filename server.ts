import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware for parsing JSON
app.use(express.json());

// Initialize Gemini client on the server-side
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// Helper to handle API keys check gracefully
const checkApiKey = () => {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY is not defined in the server environment.');
  }
};

// API Route 1: Generate custom quiz
app.post('/api/quiz/generate', async (req, res) => {
  try {
    checkApiKey();
    const { topic, difficulty, count, type } = req.body;

    const prompt = `Generate a quiz of exactly ${count || 5} questions strictly on the topic "${topic || 'Electric Current'}" for Class 10 ICSE Physics (Current Electricity syllabus).
    Difficulty level: ${difficulty || 'Medium'}.
    Question type requested: ${type || 'MCQ'}.
    
    Ensure all questions are scientifically accurate, strictly aligned with ICSE syllabus, and provide thorough step-by-step explanations (especially for numericals).
    For non-MCQ questions (Short Answer, Long Answer, Numerical), leave the options array empty and provide the ideal reference answer in correctAnswer.
    If MCQ is selected, provide exactly 4 unique options, and the correct option text in correctAnswer.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
      config: {
        systemInstruction: 'You are an elite ICSE Class 10 Physics paper-setter. You design high-quality board-standard questions with precise step-by-step solutions.',
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              questionText: { type: Type.STRING, description: 'The question text' },
              options: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: 'Four options if multiple-choice. Empty array if not MCQ.'
              },
              correctAnswer: { type: Type.STRING, description: 'The ideal reference answer or correct option text' },
              explanation: { type: Type.STRING, description: 'Comprehensive step-by-step explanation or derivation' },
              marks: { type: Type.INTEGER, description: 'Typical marks allocated (e.g. 1 for MCQ, 2 for short, 3-5 for numerical/long)' },
              difficulty: { type: Type.STRING, description: 'Easy, Medium, or Hard' },
              topic: { type: Type.STRING, description: 'Topic category' }
            },
            required: ['questionText', 'options', 'correctAnswer', 'explanation', 'marks', 'difficulty', 'topic']
          }
        }
      }
    });

    const data = JSON.parse(response.text || '[]');
    res.json({ success: true, data });
  } catch (error: any) {
    console.error('Quiz Generation Error:', error);
    res.status(500).json({ success: false, error: error.message || 'Failed to generate quiz.' });
  }
});

// API Route 2: AI Answer Evaluation
app.post('/api/quiz/evaluate', async (req, res) => {
  try {
    checkApiKey();
    const { questionText, correctAnswer, studentAnswer, marksAllocated, subject } = req.body;
    const isChemistry = subject === 'chemistry';
    const isCompApp = subject === 'computer-applications';
    
    let subjectName = 'Physics';
    let accuracyFocus = 'physics accuracy';
    let missingPointsDesc = 'Key physics concepts, definitions, or parameters the student missed';

    if (isChemistry) {
      subjectName = 'Chemistry';
      accuracyFocus = 'chemistry and chemical equation accuracy';
      missingPointsDesc = 'Key chemistry concepts, balancing equations, definitions, or parameters the student missed';
    } else if (isCompApp) {
      subjectName = 'Computer Applications (Java)';
      accuracyFocus = 'Java syntax, Class and Object design, OOP principles, Variable Description Tables, and algorithmic accuracy';
      missingPointsDesc = 'Key Java syntax, OOP concepts (encapsulation, access specifiers), Variable Description Tables, logic flow, or class structures missed';
    }

    const prompt = `Evaluate this student's answer for an ICSE Class 10 ${subjectName} question.
    Question: "${questionText}"
    Reference Ideal Answer: "${correctAnswer}"
    Student's Answer: "${studentAnswer}"
    Total Marks Available: ${marksAllocated || 3}
    
    Strictly evaluate at an ICSE Board level, highlighting keywords or code constructs they included or missed, and supply an improved version.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
      config: {
        systemInstruction: `You are an objective ICSE Board evaluator. Grade the student constructively but strictly, focusing on ${accuracyFocus} and keyword matching.`,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            marksObtained: { type: Type.NUMBER, description: 'Constructive score based on answer quality, up to total marks.' },
            status: { type: Type.STRING, description: 'Correct, Incorrect, or Partially Correct' },
            missingPoints: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: missingPointsDesc
            },
            improvedAnswer: { type: Type.STRING, description: 'A polished, high-scoring model answer for their reference' },
            explanation: { type: Type.STRING, description: 'Constructive feedback explaining the grade and correct concepts simply' }
          },
          required: ['marksObtained', 'status', 'missingPoints', 'improvedAnswer', 'explanation']
        }
      }
    });

    const evaluation = JSON.parse(response.text || '{}');
    res.json({ success: true, evaluation });
  } catch (error: any) {
    console.error('Evaluation Error:', error);
    res.status(500).json({ success: false, error: error.message || 'Failed to evaluate answer.' });
  }
});

// API Route 2.5: AI Java Runtime Simulator
app.post('/api/java/run', async (req, res) => {
  try {
    checkApiKey();
    const { code } = req.body;

    const prompt = `Act as a standard Java JDK 17 compiler and runtime console. 
    Analyze and execute the following Java code:
    \`\`\`java
    ${code}
    \`\`\`
    
    If there are syntax errors, compile-time errors, or run-time exceptions, return compilationStatus as "error" and describe the exact Java compiler/runtime error message in details.
    If the code compiles successfully, return compilationStatus as "success" and provide the exact standard console output (stdout) that running the main method (or executing the logic) would produce.
    
    Make sure the output matches standard Java execution exactly.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
      config: {
        systemInstruction: 'You are a precise, sandboxed Java Compiler and Runtime engine simulator. You output accurate compiler logs, warnings, stack traces, and standard output.',
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            compilationStatus: { type: Type.STRING, description: 'success or error' },
            output: { type: Type.STRING, description: 'The exact stdout produced if compilation is successful.' },
            errorDetails: { type: Type.STRING, description: 'The exact compiler errors or exception details if compilation/runtime failed.' }
          },
          required: ['compilationStatus', 'output', 'errorDetails']
        }
      }
    });

    const runResult = JSON.parse(response.text || '{}');
    res.json({ success: true, runResult });
  } catch (error: any) {
    console.error('Java Run Error:', error);
    res.status(500).json({ success: false, error: error.message || 'Failed to compile and run Java code.' });
  }
});

// API Route 3: Revision Materials generator
app.post('/api/quiz/revision', async (req, res) => {
  try {
    checkApiKey();
    const { topic } = req.body;

    const prompt = `Generate a high-quality ICSE Class 10 Physics revision sheet specifically for the topic: "${topic || 'Current Electricity'}".
    Provide a concise markdown summary, key definitions, important formulae, common student mistakes with fixes, and most expected board questions.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
      config: {
        systemInstruction: 'You are a master educator crafting brief, high-impact revision guides for Class 10 board students.',
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING, description: 'A 5-minute markdown high-level summary of the topic' },
            definitions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  term: { type: Type.STRING },
                  definition: { type: Type.STRING }
                },
                required: ['term', 'definition']
              }
            },
            formulae: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  formula: { type: Type.STRING },
                  explanation: { type: Type.STRING }
                },
                required: ['name', 'formula', 'explanation']
              }
            },
            commonMistakes: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  mistake: { type: Type.STRING, description: 'What students do wrong' },
                  fix: { type: Type.STRING, description: 'The correct concept or technique' }
                },
                required: ['mistake', 'fix']
              }
            },
            expectedBoardQuestions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  question: { type: Type.STRING },
                  answer: { type: Type.STRING, description: 'Model brief solution' }
                },
                required: ['question', 'answer']
              }
            }
          },
          required: ['summary', 'definitions', 'formulae', 'commonMistakes', 'expectedBoardQuestions']
        }
      }
    });

    const revision = JSON.parse(response.text || '{}');
    res.json({ success: true, revision });
  } catch (error: any) {
    console.error('Revision Gen Error:', error);
    res.status(500).json({ success: false, error: error.message || 'Failed to generate revision material.' });
  }
});

// API Route 4: AI Doubt Solver
app.post('/api/quiz/doubt', async (req, res) => {
  try {
    checkApiKey();
    const { question, history } = req.body;

    const formattedHistory = (history || []).map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }],
    }));

    // Add current question
    formattedHistory.push({
      role: 'user',
      parts: [{ text: question }],
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: formattedHistory,
      config: {
        systemInstruction: `You are an empathetic, world-class ICSE Class 10 Physics tutor. 
        Your goal is to explain concepts clearly, simply, and with maximum relevance to the Class 10 syllabus.
        Always include key formulae where relevant, give simple day-to-day physical examples, and keep explanations highly visual.
        Avoid overly advanced or university-level physics unless absolutely necessary to clear a fundamental query, but keep it accessible.`,
      },
    });

    res.json({ success: true, answer: response.text });
  } catch (error: any) {
    console.error('Doubt Solver Error:', error);
    res.status(500).json({ success: false, error: error.message || 'Failed to solve doubt.' });
  }
});

// Vite Middleware & Start Server sequence (avoiding top-level await for CJS compatibility)
if (process.env.NODE_ENV !== 'production') {
  createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  }).then((vite) => {
    app.use(vite.middlewares);
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Development Server running on http://localhost:${PORT}`);
    });
  }).catch((err) => {
    console.error('Failed to start Vite dev server:', err);
  });
} else {
  const distPath = path.join(process.cwd(), 'dist');
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Production Server running on http://localhost:${PORT}`);
  });
}
