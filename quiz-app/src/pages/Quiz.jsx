// src/pages/Quiz.jsx
import { useState } from 'react';
import '../App.css';
import questions from '../data/questions'; // Import the question sets


const questionSets = questions;

function shuffleArray(array) {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}


function Quiz({ username, category, onFinish }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);

    const [questions] = useState(() => {
        const fullSet = questionSets[category] || [];
        const shuffled = shuffleArray(fullSet);
        return shuffled.slice(0, 100); // Take only 100 random questions
    });
    
    const currentQuestion = {
        ...questions[currentIndex],
        options: shuffleArray(questions[currentIndex].options),
    };

    const handleAnswer = (selected) => {
        const isCorrect = selected === currentQuestion.answer;
        if (isCorrect) {
            setScore(score + 1);
        }

        setUserAnswers([
            ...userAnswers,
            {
                question: currentQuestion.question,
                options: currentQuestion.options,
                selected,
                correct: currentQuestion.answer,
                isCorrect,
            }
        ]);

        const next = currentIndex + 1;
        if (next < questions.length) {
            setCurrentIndex(next);
        } else {
            setShowResult(true);
        }
    };

    return (
        <div className="content">
            {!showResult ? (
                <>
                    <h2>{category} Quiz</h2>
                    <h4>Question {currentIndex + 1} of {questions.length}</h4>
                    <h3>{currentQuestion.question}</h3>
                    <div className="options-container">
                        {currentQuestion.options.map((opt, i) => (
                            <button key={i} className="option-btn" onClick={() => handleAnswer(opt)}>
                                {opt}
                            </button>
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <h2>Quiz Complete</h2>
                    <p>
                        {username}, you scored {score} out of {questions.length} (
                        {Math.round((score / questions.length) * 100)}%)
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
