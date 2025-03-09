var index = 0;
var score = 0;
var userAnswers = [];
var FM = "";
var questions = document.getElementById("questions"); 
var choices = document.getElementById("choices");

var questions = [
    {
        question: "What is the main goal of SDG 16?",
        choices: ["Zero Hunger", "Climate Action", "Peace, Justice, and Strong Institutions", "No Poverty"],
        answer: "Peace, Justice, and Strong Institutions"
    },
    {
        question: "What does SDG stand for?",
        choices: ["Sustianable Development Goals", "Sustainable Development Goalz", "Sustinaible Debelopment Gouls", "Sustainable Development Goals"],
        answer: "Sustainable Development Goals"
    },
    {
        question: "What is Target 16.3 of SDG 16?",
        choices: ["Ensure responsive, inclusive, and representative decision-making", "Develop effective, accountable, and transparent institutions", "Equal access to justice", "Provide universal legal identity"],
        answer: "Equal access to justice"
    },
    {
        question: "What is Target 16.6 of SDG 16?",
        choices: ["Ensure responsive, inclusive, and representative decision-making", "Develop effective, accountable, and transparent institutions", "Equal access to justice", "Provide universal legal identity"],
        answer: "Develop effective, accountable, and transparent institutions"
    },
    {
        question: "What is Target 16.9 of SDG 16?",
        choices: ["Ensure responsive, inclusive, and representative decision-making", "Develop effective, accountable, and transparent institutions", "Equal access to justice", "Provide universal legal identity"],
        answer: "Provide universal legal identity"
    }
];

function showQuestion() {
    document.getElementById("next").disabled = true;
    document.getElementById("feedback").innerHTML = "";

    if (index < 5) {
        document.getElementById("question").innerHTML = questions[index].question;
        choices.innerHTML = "";

        for (var i = 0; i < 4; i++) {
            var button = document.createElement("button");
            button.className = "btn";
            button.textContent = questions[index].choices[i];
            button.onclick = checkAnswer;
            choices.appendChild(button);
        }

    } else {
        showScore();
    }
}

function checkAnswer() {
    var userChoice = this.textContent;
    userAnswers[index] = userChoice;
    var correctAnswer = questions[index].answer;

    var buttons = document.getElementsByClassName("btn");
    for (var i = 0; i < 4; i++) {
        buttons[i].disabled = true;
        if (buttons[i].textContent == correctAnswer) {
            buttons[i].style.backgroundColor = "lightgreen";
        } else if (buttons[i].textContent == userChoice) {
            buttons[i].style.backgroundColor = "lightcoral";
        }
    }

    if (userChoice === correctAnswer) {
        score++;
    }

    document.getElementById("next").disabled = false;
}

document.getElementById("next").onclick = function() {
    index++;
    showQuestion();
};

function showScore() {
    document.getElementById("question").innerHTML = "You have successfully finished the quiz!";
    document.getElementById("choices").innerHTML = "Your Score: " + score + " / 5";
    document.getElementById("next").style.display = "none";
    document.getElementById("TA").style.display = "block";
    document.getElementById("TA").disabled = false;

    if (score === 0) 
        {
            FM = "You failed miserably... try again!";
        } 
    
    else if (score === 1) 
        {
            FM = "You are the ONE to do the quiz again!";
        } 

    else if (score === 2) 
        {
            FM = "Well... two is better than one, try again!";
        } 
    
    else if (score === 3) 
        {
            FM = "Not bad! Try again for a better score!";
        } 

    else if (score === 4) 
        {
            FM = "Wow! One more point!";
        } 

    else if (score === 5) 
        {
        FM = "We have a future SDG 16 leader here!";
        }

    document.getElementById("feedback").innerHTML = FM;
}

function tryagain () {
    index = 0;
    score = 0;
    userAnswers = [];
    document.getElementById("TA").style.display = "none"
    document.getElementById("next").style.display = "block";
    showQuestion();
};

showQuestion();