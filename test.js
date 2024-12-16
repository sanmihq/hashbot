const { generateContent } = require('./gemini');

(async () => {
  const prompt = "Write a story about an adventure in a magical kingdom.";
  try {
    const response = await generateContent(prompt);
    console.log("Generated Content:", response);
  } catch (error) {
    console.error("Error in test script:", error);
  }
})();
