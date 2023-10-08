let quiz = document.getElementById("quiz")
let contentHeader = document.getElementById("content-header")
let highscoreButton = document.getElementById("highscore-button")
let highscoreTitle = document.getElementById("highscore-title")
let startButton = document.getElementById("start-button")
let userList = document.getElementById("user-list")
let scoreList = document.getElementById("score-list")
let header = document.getElementById("header")
let timer = document.getElementById("timer")
let questionText = document.getElementById("question")
let answerText = document.getElementById("answers")
let guess = document.getElementById("guess")

// object of the five questions and their respective choices
let questions = {
    question: ["Commonly used data type DO NOT include:", "The condition in an if / else statement is enclosed with _____.", "Arrays in JavaScript can be used to store _____.", "String values must be enclosed within _____ when being assigned to variables.", "A very useful tool used during development and debugging for prining content to the debugger is:"],
    answer1: ["Strings", "Boolean", "Alerts", "Numbers"],
    answer2: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
    answer3: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
    answer4: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
    answer5: ["JavaScript", "Terminal/Bash", "For Loops", "Console.log"]
}

// previous highscores
let initials =  []
let scores =  []

// stores highscores to local storage
function setHighscore() {
    localStorage.setItem("initials", JSON.stringify(initials))
    localStorage.setItem("scores", JSON.stringify(scores))
}

function viewHighscores() {
    quiz.innerHTML = "" // removes main content
    header.innerHTML = "" //removes header content

    // adds return button to highscore page
    let returnMain = document.createElement("button")
    returnMain.textContent = "Return to Menu"
    returnMain.setAttribute("id", "return-button")
    header.appendChild(returnMain)

    // refreshes page to bring back to main menu
    function pageRefresh() {
        window.location.reload()
    }
    returnMain.addEventListener("click", pageRefresh)
    highscoreTitle.textContent = "Highscores"
    
    // loops through previous highscores arrays
    for (i = 0; i < initials.length; i++) {
        let li = document.createElement("li")
        li.textContent = " User: " + initials[i]
        li.setAttribute("data-index", i)
        userList.appendChild(li)
    }

    for (i = 0; i < scores.length; i++) {
        let li = document.createElement("li")
        li.textContent = "Score: " + scores[i]
        li.setAttribute("data-index", i)
        scoreList.appendChild(li)
    }
}
let timeUp = document.getElementById("time-up")
 function timesUp() {
    let timeLeft = 2
    console.log("Time's Up")
    timeUp.textContent = "Time's Up!"
    timeUp.setAttribute("id", "time-up")
    timeUp.setAttribute("style", "border-top: 3px lightgrey solid")

    let timeInterval = setInterval(function() {
        timeLeft--
    if (timeLeft == 0) {
        clearInterval(timeInterval)
        clearInterval(mainInterval)
        endScreen()
    }
    }, 1000)
}

// countdown timer
let totalTime = 75 // TODO: make sure timer is set to 75
let mainInterval = 0
function countdown() {
    mainInterval = setInterval(function() {
        totalTime--
        timer.textContent = totalTime
    if (totalTime == 0) {
        clearInterval(mainInterval)
        timesUp()
    }
    }, 1000)
}

// displays when wrong answer is selected
function displayWrong() {
    let timeLeft = 2
    totalTime -= 10
    
    console.log("Wrong")
    guess.textContent = "Wrong."
    guess.setAttribute("id", "guess")
    guess.setAttribute("style", "border-top: 3px lightgrey solid")

    let timeInterval = setInterval(function() {
        timeLeft--
    if (timeLeft == 0) {
        clearInterval(timeInterval)
        console.log("Moving On")
        guess.textContent = ""
        guess.setAttribute("style", "border-top: none")
    }
    }, 1000)
}
// displays for each question (individual)
function displayQuestion1() {
    questionText.textContent = questions.question[0]
    for (i = 1; i <= 4; i++) {
        let li = document.createElement("button")
        li.textContent = i + ". " + questions.answer1[i-1]
        li.setAttribute("id", "answer" + i)
        answerText.appendChild(li)
    }
    let answerButton1 = document.getElementById("answer1")
    let answerButton2 = document.getElementById("answer2")
    let answerButton3 = document.getElementById("answer3")
    let answerButton4 = document.getElementById("answer4")
    answerButton1.addEventListener("click", displayWrong)
    answerButton2.addEventListener("click", displayWrong)
    answerButton3.addEventListener("click", displayQuestion2)
    answerButton4.addEventListener("click", displayWrong)
}

function displayQuestion2() {
    let timeLeft = 2
    console.log("Question 1: Correct") // TODO: convert to display message
    guess.textContent = "Correct!"
    guess.setAttribute("id", "guess")
    guess.setAttribute("style", "border-top: 3px lightgrey solid")

    let timeInterval = setInterval(function() {
        timeLeft--
    if (timeLeft == 0) {
        clearInterval(timeInterval)
        answerText.textContent = ""
        questionText.textContent = questions.question[1]
        guess.textContent = ""
        guess.setAttribute("style", "border-top: none")
        for (i = 1; i <= 4; i++) {
            let li = document.createElement("button")
            li.textContent = i + ". " + questions.answer2[i-1]
            li.setAttribute("id", "answer" + i)
            answerText.appendChild(li)
        }
        let answerButton1 = document.getElementById("answer1")
        let answerButton2 = document.getElementById("answer2")
        let answerButton3 = document.getElementById("answer3")
        let answerButton4 = document.getElementById("answer4")
        answerButton1.addEventListener("click", displayWrong)
        answerButton2.addEventListener("click", displayWrong)
        answerButton3.addEventListener("click", displayQuestion3)
        answerButton4.addEventListener("click", displayWrong)
    }
    }, 1000)
}

function displayQuestion3() {
    let timeLeft = 2
    console.log("Question 2: Correct") // TODO: convert to display message
    guess.textContent = "Correct!"
    guess.setAttribute("id", "guess")
    guess.setAttribute("style", "border-top: 5px grey solid")

    let timeInterval = setInterval(function() {
        timeLeft--
    if (timeLeft == 0) {
        clearInterval(timeInterval)
        answerText.textContent = ""
        questionText.textContent = questions.question[2]
        guess.textContent = ""
        guess.setAttribute("style", "border-top: none")
        for (i = 1; i <= 4; i++) {
            let li = document.createElement("button")
            li.textContent = i + ". " + questions.answer3[i-1]
            li.setAttribute("id", "answer" + i)
            answerText.appendChild(li)
        }
        let answerButton1 = document.getElementById("answer1")
        let answerButton2 = document.getElementById("answer2")
        let answerButton3 = document.getElementById("answer3")
        let answerButton4 = document.getElementById("answer4")
        answerButton1.addEventListener("click", displayWrong)
        answerButton2.addEventListener("click", displayWrong)
        answerButton3.addEventListener("click", displayWrong)
        answerButton4.addEventListener("click", displayQuestion4)
    }
    }, 1000)
}

function displayQuestion4() {
    let timeLeft = 2
    console.log("Question 3: Correct") // TODO: convert to display message
    guess.textContent = "Correct!"
    guess.setAttribute("id", "guess")
    guess.setAttribute("style", "border-top: 5px grey solid")

    let timeInterval = setInterval(function() {
        timeLeft--
    if (timeLeft == 0) {
        clearInterval(timeInterval)
        answerText.textContent = ""
        questionText.textContent = questions.question[3]
        guess.textContent = ""
        guess.setAttribute("style", "border-top: none")
        for (i = 1; i <= 4; i++) {
            let li = document.createElement("button")
            li.textContent = i + ". " + questions.answer4[i-1]
            li.setAttribute("id", "answer" + i)
            answerText.appendChild(li)
        }
        let answerButton1 = document.getElementById("answer1")
        let answerButton2 = document.getElementById("answer2")
        let answerButton3 = document.getElementById("answer3")
        let answerButton4 = document.getElementById("answer4")
        answerButton1.addEventListener("click", displayWrong)
        answerButton2.addEventListener("click", displayWrong)
        answerButton3.addEventListener("click", displayQuestion5)
        answerButton4.addEventListener("click", displayWrong)
    }
    }, 1000)
}

function displayQuestion5() {
    let timeLeft = 2
    console.log("Question 4: Correct") // TODO: convert to display message
    guess.textContent = "Correct!"
    guess.setAttribute("id", "guess")
    guess.setAttribute("style", "border-top: 5px grey solid")

    let timeInterval = setInterval(function() {
        timeLeft--
    if (timeLeft == 0) {
        clearInterval(timeInterval)
        answerText.textContent = ""
        questionText.textContent = questions.question[4]
        guess.textContent = ""
        guess.setAttribute("style", "border-top: none")
        for (i = 1; i <= 4; i++) {
            let li = document.createElement("button")
            li.textContent = i + ". " + questions.answer5[i-1]
            li.setAttribute("id", "answer" + i)
            answerText.appendChild(li)
        }
        let answerButton1 = document.getElementById("answer1")
        let answerButton2 = document.getElementById("answer2")
        let answerButton3 = document.getElementById("answer3")
        let answerButton4 = document.getElementById("answer4")
        answerButton1.addEventListener("click", displayWrong)
        answerButton2.addEventListener("click", displayWrong)
        answerButton3.addEventListener("click", displayWrong)
        answerButton4.addEventListener("click", displayCorrect)
    }
    }, 1000)
}

// display for getting question 5 correct
function displayCorrect() {
    let timeLeft = 2
    console.log("Question 5: Correct") // TODO: convert to display message
    guess.textContent = "Correct!"
    guess.setAttribute("id", "guess")
    guess.setAttribute("style", "border-top: 5px grey solid")

    let timeInterval = setInterval(function() {
        timeLeft--
    if (timeLeft == 0) {
        clearInterval(timeInterval)
        clearInterval(mainInterval)
        questionText.innerHTML = "" // removes main content
        answerText.innerHTML = "" // removes main content

        guess.textContent = ""
        guess.setAttribute("style", "border-top: none")

        endScreen()
    }
    }, 1000)
}

// display end screen
function endScreen() {
    questionText.innerHTML = "" // removes main content
    answerText.innerHTML = "" // removes main content

    timeUp.textContent = ""
    timeUp.setAttribute("style", "border-top: none")
}

function startQuiz() {
    countdown()

    quiz.innerHTML = "" // removes main content
    highscoreButton.textContent = "" // removes view highscores button

    displayQuestion1()
}

// pulls local data for previous scores (if any)
function getHighscore() {
    let getInitials = JSON.parse(localStorage.getItem("initials"))
    let getScores = JSON.parse(localStorage.getItem("scores"))

    if (getInitials !== null && getScores !== null) {
        initials = getInitials
        scores = getScores
        console.log(initials)
        console.log(scores)
    }
}

function init() {
    getHighscore()
}

init()

highscoreButton.addEventListener("click", viewHighscores)
startButton.addEventListener("click", startQuiz)
