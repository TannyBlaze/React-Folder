const express = require('express');
const { saveQuizHistory, getUserHistory, verifyToken } = require('../controllers/quizHistory.controller');
const router = express.Router();
router.post('/', verifyToken, saveQuizHistory);
router.get('/', verifyToken, getUserHistory);
module.exports = router;
