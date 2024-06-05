const express = require('express');
const { Configuration, OpenAIApi } = require('openai');
const router = express.Router();
require('dotenv').config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

router.post('/', async (req, res) => {
    const { message } = req.body;
    console.log('Received message:', message);

    try {
        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'user', content: message }
            ],
        });

        console.log('OpenAI response:', response.data);
        res.json({ reply: response.data.choices[0].message.content });
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
