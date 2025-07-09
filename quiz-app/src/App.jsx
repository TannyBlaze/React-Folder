// src/App.jsx
import { useState } from 'react';
import Auth from './pages/Auth';
import Navbar from './components/Navbar';
import Quiz from './pages/Quiz';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
    setQuizStarted(false);
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleStartQuiz = (category) => {
    setSelectedCategory(category);
    setQuizStarted(true);
  };


  return (
    <div className="app">
      {/* Show Navbar only when logged in */}
      {user && <Navbar username={user} onLogout={handleLogout} />}

      {/* Main content */}
      {!user ? (
        <div className="login-container">
          <Auth onLogin={handleLogin} />
        </div>
      ) : quizStarted ? (
          <Quiz
            username={user}
            category={selectedCategory}
            onFinish={() => {
              setQuizStarted(false);
              setSelectedCategory(null);
            }}
          />

      ) : (
            <div className="content">
              <h2>Welcome, {user}</h2>
              <p>Select a category to begin:</p>

              <div className="category-group">
                <h3>General</h3>
                <div className="category-grid">
                  {["Mathematics", "English", "Civic Education"].map((category) => (
                    <button
                      key={category}
                      className="category-btn"
                      onClick={() => handleStartQuiz(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <h3>Sciences</h3>
                <div className="category-grid">
                  {["Biology", "Physics", "Chemistry", "Agricultural Science", "Computer Science", "Food and Nutrition" ].map((category) => (
                    <button
                      key={category}
                      className="category-btn"
                      onClick={() => handleStartQuiz(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <h3>Arts</h3>
                <div className="category-grid">
                  {["Literature-in-English", "Government", "History", "Fine Arts", "Religious Studies", "Philosophy"].map((category) => (
                    <button
                      key={category}
                      className="category-btn"
                      onClick={() => handleStartQuiz(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <h3>Commercial</h3>
                <div className="category-grid">
                  {["Economics", "Commerce", "Accounting", "Marketing", "Entrepreneurship", "Business Law"].map((category) => (
                    <button
                      key={category}
                      className="category-btn"
                      onClick={() => handleStartQuiz(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
      

      )}

    </div>
  );
}

export default App;
