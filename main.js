let start = document.getElementById("start");
let result = document.getElementById("result");
let main = document.getElementById("main");

let allQuestions = [
  {
    question: "2+2",
    correct: 4,
    answers: [1, 3, 4, 7],
  },
  {
    question: "5+7",
    correct: 12,
    answers: [6, 9, 10, 12],
  },
];

let currentQuestion = 0;
let countSucces = 0;

start.addEventListener("click", startProgram);

function startProgram() {
  start.classList.add("none");
  main.classList.remove("none");
  result.classList.add("none");
  generateQuestion();
}

function generateQuestion() {
  let question = allQuestions[currentQuestion].question;
  main.innerHTML = `<h1 class="question">${question}</h1>`;
  let btn_block = "";
  let answers = allQuestions[currentQuestion].answers;
  for (let i of answers) {
    btn_block += `<button class="btn" onclick="checkQuestion(${i})">${i}</button>`;
  }
  main.innerHTML += `<nav class="btn_block">${btn_block}</nav>`;
}

function checkQuestion(num) {
  let correct = allQuestions[currentQuestion].correct;
  if (num == correct) {
    countSucces += 1;
  }
  currentQuestion += 1;

  if (allQuestions.length > currentQuestion) {
    generateQuestion();
  }
  else {
      stopQuiz();
  }
}

function stopQuiz() {
    start.classList.remove("none");
    main.classList.add("none");
    result.classList.remove("none");

    result.innerHTML = `Решено ${countSucces} из ${allQuestions.length}`;

    currentQuestion = 0;
    countSucces = 0;
}