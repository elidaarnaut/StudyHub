const MultipleChoiceQuestion = require('../models/MultipleChoiceQuestion');
const _ = require('lodash');
exports.getAllMultipleChoiceQuestions = async (req, res) => {
    try {
        const questions = await MultipleChoiceQuestion.find();
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getRandomMultipleChoiceQuestions = async (req, res) => {
    try {
        const count = parseInt(req.params.count, 10);
        if (isNaN(count)) {
            return res.status(400).json({ error: 'Invalid count parameter' });
        }
        const questions = await MultipleChoiceQuestion.find();
        const randomQuestions = _.sampleSize(questions, count);
        res.status(200).json(randomQuestions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getMultipleChoiceQuestionById = async (req, res) => {
    try {
        const question = await MultipleChoiceQuestion.findById(req.params.id);
        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }
        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createMultipleChoiceQuestion = async (req, res) => {
    try {
        const question = await MultipleChoiceQuestion.create(req.body);
        res.status(201).json(question);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateMultipleChoiceQuestionById = async (req, res) => {
    try {
        const question = await MultipleChoiceQuestion.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }
        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteMultipleChoiceQuestionById = async (req, res) => {
    try {
        const question = await MultipleChoiceQuestion.findByIdAndDelete(req.params.id);
        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
