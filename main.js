let start = document.getElementById("start")
let result = document.getElementById("result")
let main = document.getElementById("main")

let allQuestions = [
    {
        question: "2+2",
        correct: 4,
        answers:[1, 3, 4, 7],
    },
    {
        question: "5+7",
        correct: 12,
        answers:[6, 9, 10, 12],
    }
]

let currentQuestion = 0;
let countSucces = 0;
