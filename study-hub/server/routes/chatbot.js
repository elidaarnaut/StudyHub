const express = require('express');
const OpenAI = require('openai');
const router = express.Router();
require('dotenv').config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post('/', async (req, res) => {
    const { message } = req.body;
    console.log('Received message:', message);

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: message }
            ],
        });

        console.log('OpenAI response:', response.choices[0].message);
        res.json({ reply: response.choices[0].message.content });
    } catch (error) {
        console.error('Error communicating with OpenAI API:', error.response ? error.response.data : error.message);
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Headers:', error.response.headers);
            console.error('Data:', error.response.data);
        }
        res.status(500).send('Error communicating with OpenAI API');
    }
});

module.exports = router;
