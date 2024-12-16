require('dotenv').config();
const {GoogleGenerativeAI} = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

async function generateContent(prompt) {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    try {
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error("Error generating content:", error);
    }
}

module.exports = { generateContent };