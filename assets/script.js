var prompt = document.querySelector("#start-screen");
var startBtn = document.querySelector(".startBtn");
console.log(prompt);
console.log(startBtn);
var questionsBase = [
  {
    question: "Who led MLB in homeruns in 2022?",
    correct: "Aaron Judge",
    choices: ["Aaron Judge", "Kyle Schwarber", "Paul Goldschmidt", "Shohei Ohtani"],
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
    choices: ["3000 hits", "Most games ever played", "700 career homeruns", "Most RBIs in MLB history"],
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
    choices: ["Shohei Ohtani", "Justin Verlander", "Gerrit Cole", "Clayton Kershaw"],
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
  console.log("starting quiz");
  prompt.classList.add("hide");
  var quizSection = document.querySelector("#quiz-holder");
  quizSection.classList.remove("hide");
  displayQuestion();
}

function displayQuestion() {
  console.log("displaying question");
  console.log(questionsBase[0].question);
  var questionHolder = document.querySelector("#question-element")
  console.log(questionHolder)
  questionHolder.innerHTML = questionsBase[questionIdx].question
  var answerHolder = document.querySelector("#answer-holder")
  answerHolder.innerHTML = ""
  console.log(answerHolder)
  for(let i=0; i <questionsBase[questionIdx].choices.length ; i++){
    var button = document.createElement("button")
    button.innerHTML = questionsBase[questionIdx].choices[i]
    answerHolder.appendChild(button)
    button.addEventListener("click", checkIfRight)
  }
}

function checkIfRight(event){
    event.preventDefault()
    console.log(event.target)
    //need to know which question we're at
    //need to know the text the content of the button that was clicked
    //check if you're don with the quiz
    checkIfOver()

}

function checkIfOver(){
// if the quiz is Over
if(questionIdx === questionsBase.length){
    return endQuiz()
}
else {
    questionIdx ++
    displayQuestion()
}
}

function endQuiz(){
    console.log("ended")
}
//Starts quiz when button is clicked
startBtn.addEventListener("click", startQuiz);
