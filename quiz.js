const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("options-text")); 
const questionCounterText = document.getElementById("questionCounter"); 
const scoreText = document.getElementById("score");


let currentQuestion = {};
let enterAnswers = false;
let score= 0;
let questionCounter= 0;
let availableQuestion = [];

let questions = [
    {
        question: "How many fingertips did Stannis Baratheon chop off of Davos' hand(s)? ",
        choice1: "One",
        choice2: "Two",
        choice3: "Three",
        choice4: "Four",
        answer: 4
    },
    {
        question: "At the end of his training, what must an Unsullied kill to prove he has no mercy or weakness?",
        choice1: "A slave",
        choice2: "A slave master",
        choice3: "A newborn child",
        choice4: "A newborn slave child",
        answer: 4
    },
    {
        question: "Brienne pledged her alliance to which of these pairs?",
        choice1: "Renly Baratheon and Melisandre",
        choice2: "Catelyn Stark and Renly Baratheon ",
        choice3: "Sansa Stark and Selwyn Tarth ",
        choice4: "Stannis Baratheon and Catelyn Stark ",
        answer: 2
    },
    {
        question: "What noble house is Catelyn Stark from?",
        choice1: "House Tully",
        choice2: "House Greyjoy ",
        choice3: "House Bolton ",
        choice4: "House Frey ",
        answer: 1
    },
    {
        question: "Why could Jon leave the Night's Watch, since his vows were for life?",
        choice1: "Because he was Lord Commander of the Night's watch",
        choice2: "Because he was a Bastard ",
        choice3: "Because he was heir to the throne ",
        choice4: "Because he died ",
        answer: 4
    },
];

const correctAnswer = 10;
const maxQuestions = 5;

startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestion = [...questions];
    console.log(availableQuestion);
    getNewQuestion();
};


}

getNewQuestion = () => {
    if(availableQuestion.length== 0 || questionCounter >= maxQuestions ) {
        return window.location.assign("endgame.html");
}

    questionCounter++;
    questionCounterText.innerText = questionCounter + "/" + maxQuestions;

    const questionIndex = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[questionIndex];
    question.innerText = currentQuestion.question;
    
    choices.forEach(choice => {
        const number =choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];

    });

    availableQuestion.splice(questionIndex, 1);

    enterAnswers = true;
};

getNewQuestion();

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!enterAnswers)
        return;
        enterAnswers = false;

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply =
         selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

         
       
        selectedChoice.parentElement.classList.add(classToApply);

        //getNewQuestion();
    });
});

incrementScore = num => {
    score += num;
    score.innerText = score;
};

startQuiz();


