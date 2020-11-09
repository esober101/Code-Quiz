  // Variable questions
  var questions = [
    {
    title: "When being assigned to variables, what must sting values be enclosed with? ",
    options: ["commas","curly brackets","quotes","parentheses"],
    answer : "quotes"    
    },
    {
    title: "What can arrays in JavaScript be used to store?",
    options: ["numbers and strings","others Arrays","booleances", "all of the above"],
    answer : "all of the above"    
    },
    {
    title: "What is a very useful tool used during development and debugging for printing content to the debugger?",
    options: ["JavaScript","terminal/bash","alerts", "console.log"],
    answer : "console.log"    
    },
    {
    title: "Which is NOT a commonly used data type?",
    options: ["alerts","numbers","booleans","strings", ],
    answer : "alerts"    
    },
    {
    title: "Which encloses the condition in an if/else statement?",
    options: ["square brackets","parentheses","curly brackets","quotes", ],
    answer : "parentheses"    
    },
];

// Variables declared
var current = 0;
var count = 75;
var allScores = [];
var userScores = JSON.parse(localStorage.getItem("userScores"));
var quizQuestions = document.getElementById("quiz-questions");
var timer = document.getElementById("timer");
var btnStart = document.getElementById("btn-start");
var timecounter = document.getElementById("timecounter");
var titleitem = document.getElementById("title-item");
var nextQuestions = document.getElementById("next-questions");
var userAnswers = document.getElementById("question-answers");
var myScore = document.getElementById("score");
var btnScore = document.getElementById("btnScore");
var info = document.getElementById("info");
var addscore = document.getElementById("addscore");


// Quiz start
btnStart.addEventListener("click", beginQuiz);
    function beginQuiz(){
        if(userScores !==null) { 
            allScores = userScores;}
            info.classList.add("d-none");
            btnStart.classList.add("d-none");
            timecounter.classList.remove("d-none");
            quizQuestions.classList.remove("d-none");
            nextQuestions= questions[current];
            console.log(nextQuestions.title);
            currentQuestion(nextQuestions);
            setTime();}
            btnScore.addEventListener("click" , function(){
            let name = document.getElementById("inputScore").value;
            scoreBoard(name, count);
});

// Questions
function currentQuestion(question){
    titleitem.innerText=question.title;
    question.options.forEach(element => {
    var button =document.createElement("button");
    button.className="btn-primary btn-block";
    button.innerText=element;
    userAnswers.appendChild(button);
    button.addEventListener("click", displaynextQuestion);
    });
}


function displaynextQuestion(e){
    current++;
    if(current < questions.length){
        correction(e.target.innerText == nextQuestions.answer);
        userAnswers.innerHTML="";
        if(current < questions.length){    
            nextQuestions= questions[current];
            currentQuestion(nextQuestions);
        }else {
            current = 0;
            currentQuestion(nextQuestions);
        }
        }else{
        console.log("endgame");
        endgame();
        }
    }

// Time set
function setTime() {
    let timeInterval = setInterval(function() {
    count--;
    timer.innerText = count;
    if(count === 0) {
    clearInterval(timeInterval);
    sendMessage();
    }
    }, 1000);
  }
function sendMessage() {
    timer.innerText = "Time's Up!";
}


// Response to answers
function correction(response){
    if(response){
        alert.innerText= "Correct"
        console.log("Correct")
    }else {
        alert.innerText="Incorrect"
        count = count -15
        timer.innerHTML = count
        console.log("Incorrect")
    }
}

// Score board
function scoreBoard(a, b) {
    var userData = { inits: a, userScore: b };
    allScores.push(userData);
    localStorage.setItem("userScores", JSON.stringify(allScores));
    location.href = "score.html";
}

// End of game
 function endgame (){
    btnStart.classList.add("d-none");
    myScore.innerText = count;
    addscore.classList.remove("d-none");
    timecounter.classList.add("d-none");
    quizQuestions.classList.add("d-none");
 }
