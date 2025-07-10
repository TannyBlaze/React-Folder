const express = require('express');
const router = express.Router();
const { saveHistory, getHistoryByUser } = require('../controllers/quizHistory.controller');

router.post('/', saveHistory);
router.get('/:userId', getHistoryByUser);

module.exports = router;
