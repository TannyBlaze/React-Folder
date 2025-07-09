import biologyQuestions from '../data/biologyQuestions';

const questions = {
    // 🔬 Sciences
    Biology: biologyQuestions,
    Physics: [
        {
            question: "What is the SI unit of force?",
            options: ["Joule", "Watt", "Pascal", "Newton"],
            answer: "Newton"
        }
    ],
    Chemistry: [
        {
            question: "What is the chemical symbol for water?",
            options: ["O2", "H2", "H2O", "OH"],
            answer: "H2O"
        }
    ],
    "Agricultural Science": [
        {
            question: "Which of these is a cash crop?",
            options: ["Cassava", "Cocoa", "Maize", "Millet"],
            answer: "Cocoa"
        }
    ],
    "Computer Science": [
        {
            question: "What does CPU stand for?",
            options: [
                "Central Processing Unit",
                "Computer Personal Unit",
                "Central Power Unit",
                "Control Processing Utility"
            ],
            answer: "Central Processing Unit"
        }
    ],
    "Food and Nutrition": [
        {
            question: "Which of the following is a source of protein?",
            options: ["Bread", "Rice", "Meat", "Sugar"],
            answer: "Meat"
        }
    ],

    // 📘 General
    Mathematics: [
        {
            question: "What is the square root of 64?",
            options: ["6", "7", "8", "9"],
            answer: "8"
        }
    ],
    English: [
        {
            question: "Identify the noun in this sentence: 'The boy ran quickly.'",
            options: ["ran", "quickly", "boy", "the"],
            answer: "boy"
        }
    ],
    "Civic Education": [
        {
            question: "Which arm of government makes laws?",
            options: ["Executive", "Legislative", "Judiciary", "Police"],
            answer: "Legislative"
        }
    ],

    // 🎨 Arts
    "Literature-in-English": [
        {
            question: "Who wrote 'Things Fall Apart'?",
            options: ["Wole Soyinka", "Chinua Achebe", "Ngũgĩ wa Thiong'o", "Ben Okri"],
            answer: "Chinua Achebe"
        }
    ],
    Government: [
        {
            question: "Nigeria practices what type of government?",
            options: ["Monarchy", "Theocracy", "Democracy", "Oligarchy"],
            answer: "Democracy"
        }
    ],
    History: [
        {
            question: "In what year did Nigeria gain independence?",
            options: ["1957", "1960", "1963", "1970"],
            answer: "1960"
        }
    ],
    "Fine Arts": [
        {
            question: "What is the term for a painting made on wet plaster?",
            options: ["Fresco", "Mural", "Canvas", "Sketch"],
            answer: "Fresco"
        }
    ],
    "Religious Studies": [
        {
            question: "How many books are in the New Testament?",
            options: ["26", "27", "39", "66"],
            answer: "27"
        }
    ],
    Philosophy: [
        {
            question: "Who is the author of 'The Republic'?",
            options: ["Aristotle", "Socrates", "Plato", "Descartes"],
            answer: "Plato"
        }
    ],

    // 💼 Commercial
    Economics: [
        {
            question: "What is the basic economic problem?",
            options: ["Inflation", "Scarcity", "Unemployment", "Poverty"],
            answer: "Scarcity"
        }
    ],
    Commerce: [
        {
            question: "Which of the following is not a factor of production?",
            options: ["Land", "Labor", "Capital", "Money"],
            answer: "Money"
        }
    ],
    Accounting: [
        {
            question: "What is the accounting equation?",
            options: [
                "Assets = Liabilities - Capital",
                "Assets = Liabilities + Capital",
                "Capital = Assets + Liabilities",
                "Liabilities = Capital - Assets"
            ],
            answer: "Assets = Liabilities + Capital"
        }
    ],
    Marketing: [
        {
            question: "The 4Ps of marketing include product, price, promotion, and what?",
            options: ["Planning", "Place", "People", "Process"],
            answer: "Place"
        }
    ],
    Entrepreneurship: [
        {
            question: "What is the term for someone who starts and runs a business?",
            options: ["Investor", "Manager", "Entrepreneur", "Producer"],
            answer: "Entrepreneur"
        }
    ],
    "Business Law": [
        {
            question: "A contract without consideration is generally what?",
            options: ["Valid", "Void", "Illegal", "Enforceable"],
            answer: "Void"
        }
    ]
};

export default questions;
