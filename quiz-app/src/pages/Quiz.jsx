// src/pages/Quiz.jsx
import { useState } from 'react';
import '../App.css';
import questions from '../data/questions';
import { saveQuizHistory } from '../services/api';


const questionSets = questions;

function shuffleArray(array) {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}

function getRandomSample(array, size) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, size);
}

function Quiz({ username, category, onFinish }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);

    const [questions] = useState(() => {
        const fullSet = questionSets[category] || [];
        return getRandomSample(fullSet, 10); // or 100 in production
    });
    

    const [shuffledOptionsList] = useState(() => {
        return questions.map(q => ({
            ...q,
            options: shuffleArray(q.options),
        }));
    });

    const currentQuestion = shuffledOptionsList[currentIndex];

    const handleSelect = (selected) => {
        const isCorrect = selected === currentQuestion.answer;

        const updatedAnswers = [...userAnswers];
        updatedAnswers[currentIndex] = {
            question: currentQuestion.question,
            options: currentQuestion.options,
            selected,
            correct: currentQuestion.answer,
            isCorrect,
        };

        setUserAnswers(updatedAnswers);
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleFinish = async () => {
        setShowResult(true);

        const data = {
            category,
            score: finalScore,
            total: questions.length,
            answers: userAnswers
        };

        try {
            await saveQuizHistory(data);
            console.log('Quiz history saved!');
        } catch (err) {
            console.error('Failed to save quiz history:', err?.response?.data || err.message);
        }
    };
    

    const finalScore = userAnswers.filter(ans => ans?.isCorrect).length;

    return (
        <div className="content">
            {!showResult ? (
                <>
                    <h2>{category} Quiz</h2>
                    <h4>Question {currentIndex + 1} of {questions.length}</h4>

                    {/* === Progress Tracker Grid === */}
                    <div className="progress-grid">
                        {questions.map((_, index) => {
                            const answered = userAnswers[index];
                            const isActive = index === currentIndex;

                            return (
                                <button
                                    key={index}
                                    className={`progress-dot ${isActive ? 'active' : ''} ${answered ? 'answered' : 'unanswered'}`}
                                    onClick={() => setCurrentIndex(index)}
                                >
                                    {index + 1}
                                </button>
                            );
                        })}
                    </div>

                    {/* === Main Question === */}
                    <h3>{currentQuestion.question}</h3>
                    <div className="options-container">
                        {currentQuestion.options.map((opt, i) => {
                            const isSelected = userAnswers[currentIndex]?.selected === opt;
                            return (
                                <button
                                    key={i}
                                    className={`option-btn ${isSelected ? 'selected' : ''}`}
                                    onClick={() => handleSelect(opt)}
                                >
                                    {opt}
                                </button>
                            );
                        })}
                    </div>

                    <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
                        <button
                            className="start-btn"
                            onClick={handlePrevious}
                            disabled={currentIndex === 0}
                        >
                            Previous
                        </button>

                        {currentIndex < questions.length - 1 ? (
                            <button className="start-btn" onClick={handleNext}>
                                Next
                            </button>
                        ) : (
                            <button className="start-btn" onClick={handleFinish}>
                                Finish
                            </button>
                        )}
                    </div>
                </>
            ) : (
                <>
                    <h2>Quiz Complete</h2>
                    <p>
                        {username}, you scored {finalScore} out of {questions.length} (
                        {Math.round((finalScore / questions.length) * 100)}%)
                    </p>

                    <button className="start-btn" onClick={onFinish}>Go Home</button>

                    <div className="results-container">
                        {userAnswers.map((ans, index) => (
                            <div key={index} className={`result-card ${ans.isCorrect ? 'correct' : 'wrong'}`}>
                                <h4>Q{index + 1}: {ans.question}</h4>
                                <p>Your answer: <strong>{ans.selected}</strong></p>
                                {!ans.isCorrect && (
                                    <p>Correct answer: <strong>{ans.correct}</strong></p>
                                )}
                            </div>
                        ))}
                    </div>

                    <button className="start-btn" onClick={onFinish}>Go Home</button>
                </>
            )}
        </div>
    );
}

export default Quiz;
