let startButton = document.querySelector(".start");
let timer = document.querySelector(".timer");
let heading = document.querySelector(".heading");
let paragraph = document.querySelector("#rules");
let startBtn = document.querySelector(".start");
let option = document.querySelector(".container");


var timeLeft = 60;
let questionIndex = 0;
let points = 0;

// Questions, option and correct answer stored in an object
const questions = [
  {
    question: "Inside which HTML tags do we put Javascript?",
    choices: ['<javascript>', '<js>', '<script>', '<scripting>'],
    correct: '<script>'
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    choices: ['msgBox("Hello World")', 'msg("Hello World")', 'alert("Hello World")', 'alertBox("Hello World")'],
    correct: 'alert("Hello World")'
  },
  {
    question: "How do you create a function in Javascript?",
    choices: ['function = myFunction()', 'function myFunction()', 'function:myFunction()', 'myFunction()'],
    correct: 'function myFunction()'
  },
  {
    question: "How do you call a function named 'myFunction'",
    choices: ['myFunction()', 'call myFunction()', 'callFunction myFunction()', 'myFunction() call'],
    correct: 'myFunction()'
  },
  {
    question: "How can you adda comment in Javascript?",
    choices: ['<!--This is a comment-->', '"This is a comment"', '/This is a comment', '//This is a comment'],
    correct: '//This is a comment'
  },
];

// event listener as sson as someone clicks start button
startButton.addEventListener("click", start);

function start() {
  timer1();
  displayQuestion();

}

// function for displaying questions
function displayQuestion() {
  option.innerHTML = '';
  heading.innerHTML = '';
  paragraph.setAttribute("style", "display: none;");
  startBtn.setAttribute("style", "display: none;");

  heading.innerHTML = questions[questionIndex].question;
  for (let index = 0; index < questions[questionIndex].choices.length; index++) {
    createButton(questions[questionIndex].choices[index])
  };
}

// function for timer
function timer1() {

  var timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timer.textContent = "Time: " + timeLeft + " seconds remaining";
      timeLeft--;
      
      
    } else if (timeLeft == 0){
      heading.innerHTML = "Quiz Ended"
      timer.textContent = "Time up";
      option.innerHTML = "";
     
    } 
    else {
      timer.textContent = "Time Up";
      clearInterval(timeInterval);
    }
  }, 1000);
};

// fucntion to create options
function createButton(newAnswer, Decision) {
  var button = document.createElement("button");
  button.textContent = newAnswer;
  button.setAttribute("style", "border-radius: 10px; background-color: rgb(12, 6, 97); width: 400px; padding: 20px; margin: 20px; color: aliceblue; font-size: 25px;");
  button.setAttribute("class", "button");
  option.append(button);
};

option.addEventListener('click', function (event) {
  console.log(event.target.getAttribute('class'));
  if(event.target.getAttribute('class') === 'button') {
    if (event.target.textContent === questions[questionIndex].correct) {
      questionIndex++; // index will go up, so instead 0 it is now 1
      points++;
      console.log('Your points are ' + points);
      displayQuestion();
    } else {
      timeLeft-= 10;
      
    }
  }
})
