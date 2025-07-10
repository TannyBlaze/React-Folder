const jwt = require('jsonwebtoken');
const QuizHistory = require('../models/quizHistory.model');

exports.verifyToken = (req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth) return res.status(401).json({ message: 'No token' });
    const token = auth.split(' ')[1];
    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch {
        res.status(401).json({ message: 'Invalid token' });
    }
};

exports.saveQuizHistory = async (req, res) => {
    const { category, score, total, answers } = req.body;
    const history = await QuizHistory.create({
        userId: req.user.userId,
        category,
        score,
        total,
        answers
    });
    res.status(201).json(history);
};

exports.getUserHistory = async (req, res) => {
    const history = await QuizHistory.find({ userId: req.user.userId }).sort({ createdAt: -1 });
    res.json(history);
};
