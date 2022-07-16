const quizData = [
    {
        question: "Which of the following is the correct name of React.js?",
        a: "React",
        b: "React.js",
        c: "ReactJS",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "Which of the following are the advantages of React.js?",
        a: "React.js can increase the application's performance with Virtual DOM.",
        b: "React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.",
        c: "React.js can render both on client and server side.",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "Which of the following is not a disadvantage of React.js?",
        a: "React.js has only a view layer. We have put your code for Ajax requests, events and so on.",
        b: "The library of React.js is pretty large.",
        c: "The JSX in React.js makes code easy to read and write.",
        d: "The learning curve can be steep in React.js.",
        correct: "c",
    },
    {
        question: "Which of the following command is used to install create-react-app?",
        a: "npm install -g create-react-app",
        b: "npm install create-react-app",
        c: "npm install -f create-react-app",
        d: "install -g create-react-app",
        correct: "a",
    },
    {
        question: "What of the following is used in React.js to increase performance?",
        a: "Original DOM",
        b: "Virtual DOM",
        c: "Both A and B.",
        d: "None of the above.",
        correct: "b",
    },
    {
        question: "A class is a type of function, but instead of using the keyword function to initiate it, which keyword do we use?",
        a: "Constructor",
        b: "Class",
        c: "Object",
        d: "DataObject",
        correct: "b",
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
