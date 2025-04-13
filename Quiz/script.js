const question=[
    {
        question:"Which language runs in ",
        answer:[
            
             { text:"c",correct:false},
             { text:"java",correct:false},
             { text:"python",correct:false},
             { text:"javascript",correct:true}

        ]
        
    },
    {
        question:"What does CSS stand for?",
        answer:[
            { text:"Cascading Style Sheets",correct:true},    
            { text:"Common Style Sheets",correct:false},
            { text:"Computer Style Sheets",correct:false},
            { text:"Colorful Style Sheets",correct:false}
        ],
    },
    {
        question:"What does HTML stand for?",
        answer:[
            { text:"Hyper Text Markup Language",correct:true},
            { text:"Hyper Text Machine Language",correct:false},
            { text:"Hyper Tool Markup Language",correct:false},
            { text:"Hyper Text Multiple Language",correct:false}
        ],
    },
    {
        question:"What does HTTP stand for?",
        answer:[
            { text:"Hyper Text Transfer Protocol",correct:true},
            { text:"Hyper Text Transfer Protocol",correct:false},
            { text:"Hyper Text Transfer Protocol",correct:false},
            { text:"Hyper Text Transfer Protocol",correct:false}
        ],
    },
    {
        question:"What does SQL stand for?",
        answer:[
            { text:"Structured Query Language",correct:true},    
            { text:"Style Query Language",correct:false},
            { text:"Script Query Language",correct:false},
            { text:"Software Query Language",correct:false}]
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.querySelector(".next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerText = `You scored ${score} out of ${question.length}!`;
    nextButton.innerText = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < question.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < question.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
