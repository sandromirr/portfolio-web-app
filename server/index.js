import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Load profile data once at startup
const profilePath = path.join(__dirname, 'profile.json');
let profile = { name: 'Your Name', summary: 'Update profile.json with your real data.' };
try {
  const raw = fs.readFileSync(profilePath, 'utf8');
  profile = JSON.parse(raw);
} catch (err) {
  console.warn('profile.json not found or invalid; using default placeholder profile.');
}

const apiKey = process.env.GOOGLE_API_KEY;
if (!apiKey) {
  console.warn('GOOGLE_API_KEY is not set. The career copilot endpoint will fail until this is configured.');
}

const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;
const model = genAI ? genAI.getGenerativeModel({ model: 'gemini-1.5-flash' }) : null;

app.post('/api/career-copilot', async (req, res) => {
  if (!model) {
    return res.status(500).json({ error: 'Gemini model not configured. Set GOOGLE_API_KEY.' });
  }

  try {
    const { message, history = [] } = req.body || {};

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'message is required' });
    }

    const systemPrompt = `You are a friendly, concise \"Career Copilot\" for ${profile.name}.
Use ONLY the profile data and project descriptions below to answer questions
about their skills, experience, projects, and career path.
If something is not in the data, say you are not sure.

PROFILE DATA:
${JSON.stringify(profile, null, 2)}
`;

    const chatHistory = [
      { role: 'user', parts: [{ text: systemPrompt }] },
      ...history.map((h) => ({
        role: h.role === 'model' ? 'model' : 'user',
        parts: [{ text: String(h.content || '') }],
      })),
      { role: 'user', parts: [{ text: message }] },
    ];

    const result = await model.generateContent({ contents: chatHistory });
    const reply = result.response.text();

    res.json({ reply });
  } catch (err) {
    console.error('Error in /api/career-copilot:', err);
    res.status(500).json({ error: 'Something went wrong with Gemini.' });
  }
});

// In production, serve the React build if available
const clientDistPath = path.join(__dirname, '..', 'client', 'dist');
if (fs.existsSync(clientDistPath)) {
  app.use(express.static(clientDistPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
