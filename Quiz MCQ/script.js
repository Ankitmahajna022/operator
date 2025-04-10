const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        answer: "Blue Whale"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: "JavaScript"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        answer: "Au"
    },
    {
        question: "Which country is home to the kangaroo?",
        options: ["New Zealand", "South Africa", "Australia", "Brazil"],
        answer: "Australia"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "In which year did World War II end?",
        options: ["1943", "1945", "1947", "1950"],
        answer: "1945"
    },
    {
        question: "What is the main component of the Sun?",
        options: ["Liquid Lava", "Hydrogen", "Oxygen", "Carbon"],
        answer: "Hydrogen"
    }
];
const questionElement = document.querySelector('.question');
const optionsElement = document.querySelector('.options');
const nextButton = document.querySelector('.next-btn');
const timerElement = document.querySelector('.timer');
const resultContainer = document.querySelector('.result-container');
const scoreElement = document.querySelector('.score');
const restartButton = document.querySelector('.restart-btn');
const progressBar = document.querySelector('.progress');
const quizContainer = document.querySelector('.quiz-container');

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 60;
let selectedOption = null;
let quizCompleted = false;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizCompleted = false;
    resultContainer.style.display = 'none';
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    
    progressBar.style.width = `${(currentQuestionIndex / questions.length) * 100}%`;
    
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;
    
    currentQuestion.options.forEach(option => {
        const button = document.createElement('div');
        button.innerHTML = option;
        button.classList.add('option');
        optionsElement.appendChild(button);
        
        button.addEventListener('click', () => selectOption(button, option));
    });
    
    startTimer();
}
function resetState() {
    clearInterval(timer);
    timeLeft = 60;
    updateTimerDisplay();
    selectedOption = null;
    
    while (optionsElement.firstChild) {
        optionsElement.removeChild(optionsElement.firstChild);
    }
    
    nextButton.style.display = 'block';
    nextButton.textContent = currentQuestionIndex === questions.length - 1 ? 'Submit Quiz' : 'Next Question';
    nextButton.disabled = true;
}

function startTimer() {
    updateTimerDisplay();
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeUp();
        }
    }, 1000);
}
function updateTimerDisplay() {
    timerElement.textContent = `Time left: ${timeLeft}s`;
    if (timeLeft <= 10) {
        timerElement.style.color = '#ff7675';
    } else {
        timerElement.style.color = '#fdcb6e';
    }
}
function handleTimeUp() {
    const options = document.querySelectorAll('.option');
    const currentQuestion = questions[currentQuestionIndex];
    
    options.forEach(option => {
        if (option.textContent === currentQuestion.answer) {
            option.classList.add('correct');
        }
        
        option.style.cursor = 'not-allowed';
        option.removeEventListener('click', selectOption);
    });
    
    nextButton.disabled = false;
}
function selectOption(selectedButton, selectedAnswer) {
    if (selectedOption !== null) return;
    
    selectedOption = selectedAnswer;
    const currentQuestion = questions[currentQuestionIndex];
    selectedButton.classList.add('selected');

    const isCorrect = selectedAnswer === currentQuestion.answer;
    if (isCorrect) {
        score++;
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('incorrect');
        document.querySelectorAll('.option').forEach(option => {
            if (option.textContent === currentQuestion.answer) {
                option.classList.add('correct');
            }
        });
    }
    
    document.querySelectorAll('.option').forEach(option => {
        option.style.cursor = 'not-allowed';
        option.removeEventListener('click', selectOption);
    });
    
    clearInterval(timer);
    
    nextButton.disabled = false;
}
function showScore() {
    resetState();
    questionElement.style.display = 'none';
    optionsElement.style.display = 'none';
    nextButton.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreElement.textContent = `${score}/${questions.length}`;
    if (score >= 8) {
        quizContainer.style.boxShadow = '0 10px 30px rgba(0, 184, 148, 0.5)';
    }
}
function handleNextButton() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        quizCompleted = true;
        showScore();
    }
}
nextButton.addEventListener('click', () => {
    if (selectedOption !== null || timeLeft <= 0) {
        handleNextButton();
    }
});

restartButton.addEventListener('click', () => {
    quizContainer.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    questionElement.style.display = 'block';
    optionsElement.style.display = 'grid';
    startQuiz();
});
startQuiz();