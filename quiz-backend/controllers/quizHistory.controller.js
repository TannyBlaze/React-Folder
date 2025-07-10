const QuizHistory = require('../models/quizHistory.model');

const saveHistory = async (req, res) => {
    const { userId, category, score, total } = req.body;
    try {
        const history = await QuizHistory.create({ userId, category, score, total });
        res.status(201).json(history);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getHistoryByUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const history = await QuizHistory.find({ userId }).sort({ date: -1 });
        res.json(history);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { saveHistory, getHistoryByUser };
