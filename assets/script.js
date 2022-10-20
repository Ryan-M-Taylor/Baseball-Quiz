var quizPrompt = document.querySelector("#start-screen");
var startBtn = document.querySelector(".startBtn");
var timeLeft = document.querySelector("#time-left");
var highScores = document.querySelector("#high-scores");
var quizSection = document.querySelector("#quiz-holder");
var leaderBoard = document.querySelector(".leader-board");
var scoreList = document.querySelector("#score-list");
var nameInput = document.querySelector("#name");
var scoreForm = document.querySelector("#score-form");
var submitButton = document.querySelector(".submit-button");
var timeSection = document.querySelector("#time-left");

var timer = "";
var timerCount = 100;
var gameEnd = true;
var correctAnswers = 0;
var leaders = [];
var questionsBase = [
  {
    question: "Who led MLB in homeruns in 2022?",
    correct: "Aaron Judge",
    choices: [
      "Aaron Judge",
      "Kyle Schwarber",
      "Paul Goldschmidt",
      "Shohei Ohtani",
    ],
  },
  {
    question: "Which team is not in the American League?",
    correct: "Mets",
    choices: ["Yankees", "Mets", "Orioles", "Angels"],
  },
  {
    question: "Which team won the 2021 World Series?",
    correct: "Braves",
    choices: ["Dodgers", "Astros", "Cardinals", "Braves"],
  },
  {
    question: "What milestone did Albert Pujols achieve in 2022?",
    correct: "700 career homeruns",
    choices: [
      "3000 hits",
      "Most games ever played",
      "700 career homeruns",
      "Most RBIs in MLB history",
    ],
  },
  {
    question: "Who has the record for most career homeruns?",
    correct: "Barry Bonds",
    choices: ["Barry Bonds", "Babe Ruth", "Albert Pujols", "Hank Aaron"],
  },
  {
    question: "Who won the Homerun Derby in 2022?",
    correct: "Juan Soto",
    choices: ["Julio Rodriguez", "Juan Soto", "Aaron Judge", "Albert Pujols"],
  },
  {
    question: "What team had the highest total attendance in 2022?",
    correct: "Dodgers",
    choices: ["Yankees", "Cardinals", "Dodgers", "Braves"],
  },
  {
    question: "What team is not in the National League?",
    correct: "Astros",
    choices: ["Giants", "Astros", "Padres", "Marlins"],
  },
  {
    question: "Who led MLB in strikeouts in 2022?",
    correct: "Gerrit Cole",
    choices: [
      "Shohei Ohtani",
      "Justin Verlander",
      "Gerrit Cole",
      "Clayton Kershaw",
    ],
  },
  {
    question: "Who has the most hits in MLB history?",
    correct: "Pete Rose",
    choices: ["Pete Rose", "Ty Cobb", "Derek Jeter", "Ichiro Suzuki"],
  },
];

var questionIdx = 0;

//function to ask quiz questions and allow user to select answer
function startQuiz() {
  quizPrompt.classList.add("hide");
  quizSection.classList.remove("hide");
  timeSection.classList.remove("hide");

  timer = setInterval(function () {
    if (timerCount > 0) {
      timerCount--;
      timeLeft.textContent = timerCount;
    } else if ((timerCount <= 0)) {
      alert("Time's Up!!!");
      clearInterval(timer);
      return endQuiz();
    }
  }, 1000);
  displayQuestion();
}

function displayQuestion() {
  console.log("displaying question");
  var questionHolder = document.querySelector("#question-element");
  console.log(questionHolder);
  questionHolder.innerHTML = questionsBase[questionIdx].question;
  var answerHolder = document.querySelector("#answer-holder");
  answerHolder.innerHTML = "";
  console.log(answerHolder);
  for (let i = 0; i < questionsBase[questionIdx].choices.length; i++) {
    var button = document.createElement("button");
    button.innerHTML = questionsBase[questionIdx].choices[i];
    answerHolder.appendChild(button);
    button.addEventListener("click", checkIfRight);
  }
}

function checkIfRight(event) {
  event.preventDefault();
  console.log(event.target.innerHTML);
  var currentQuestion = questionsBase[questionIdx];
  console.log(currentQuestion);
  var answer = event.target.innerHTML;
  console.log(answer, questionsBase[questionIdx].correct);
  if (answer === questionsBase[questionIdx].correct) {
    alert("Correct! Good Job!");
    correctAnswers++;
  } else {
    alert("That is incorrect! You lost 10 seconds!");
    timerCount -= 10;
  }

  checkIfOver();
}

function checkIfOver() {
  // if the quiz is Over
  if (questionIdx === (questionsBase.length - 1)) {
    clearInterval(timer);
    return endQuiz();
  } else {
    questionIdx++;
    displayQuestion();
  }
}

function endQuiz() {
  console.log("ended");
  quizSection.classList.add("hide");
  highScores.classList.remove("hide");
}

function renderScores(){
    scoreList.innerHTML = "";
   
    console.log(JSON.parse(localStorage.getItem("highscores")))
    var leaders = JSON.parse(localStorage.getItem("highscores"));
    console.log(leaders)
    for (var i = 0; i < leaders.length; i++) {
        var leader = leaders[i] 
        console.log(leader)
        var li = document.createElement("li");
        li.textContent = leader.name +": " + leader.score;
        li.setAttribute("data-index", i);
        
        scoreList.appendChild(li);
      }
}

function init() {
    
    renderScores();
  }

function storeScores(score) {
    console.log(JSON.parse(localStorage.getItem("highscores")))
    var scores = JSON.parse(localStorage.getItem("highscores")) || []
    scores.push(...score)
    localStorage.setItem("highscores", JSON.stringify(scores));
  }

  submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    var nameText = {name: nameInput.value.trim(), score: correctAnswers};
    var scores = JSON.parse(localStorage.getItem("highscores")) || []
    scores.push(nameText);
    nameInput.value = "";

    storeScores(scores);
    renderScores();
    
  });

//Starts quiz when button is clicked
startBtn.addEventListener("click", startQuiz);

init();

function myLogs(log){
    console.log(log)
}
myLogs(1)