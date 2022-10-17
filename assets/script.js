var prompt = document.querySelector("#start-screen");
var startBtn = document.querySelector(".startBtn");
console.log(prompt);
console.log(startBtn);
var questionsBase = [
  {
    question: "What's your name",
    correct: "Ryan",
    choices: ["Ryan", "Alex", "Josh", "Will"],
  },
  {
    question: "whats the best hotdog topping",
    correct: "ketchup",
    choices: ["ketchup", "bacon", "mustard", "relish"],
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
