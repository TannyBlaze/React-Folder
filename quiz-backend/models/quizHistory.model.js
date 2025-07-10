const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    category: String,
    score: Number,
    total: Number,
    answers: Array,
    createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('QuizHistory', schema);
