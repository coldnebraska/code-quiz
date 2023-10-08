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

// object of the five questions and their respective choices
let questions = {
    question: ["Commonly used data type DO NOT include:", "The condition in an if / else statement is enclosed with _____.", "Arrays in JavaScript can be used to store _____.", "String values must be enclosed within _____ when being assigned to variables.", "A very useful tool used during development and debugging for prining content to the debugger is:"],
    answer1: ["Strings", "Boolean", "Alerts", "Numbers"],
    answer2: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
    answer3: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
    answer4: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
    answer5: ["JavaScript", "Terminal/Bash", "For Loops", "Console.log"]
}

let initials =  ["DB", "SO"]
let scores =  [0, 1]

// stores highscores to local storage
function setHighscore() {
    localStorage.setItem("initials", JSON.stringify(initials))
    localStorage.setItem("scores", JSON.stringify(scores))
}

function viewHighscores() {
    quiz.innerHTML = "" // removes main content
    header.innerHTML = "" //removes header content

    // Adds return button
    let returnMain = document.createElement("button")
    returnMain.textContent = "Return to Menu"
    returnMain.setAttribute("id", "return-button")
    header.appendChild(returnMain)

    // refreshes page to bring back to main look
    function pageRefresh() {
        window.location.reload()
    }
    returnMain.addEventListener("click", pageRefresh)
    highscoreTitle.textContent = "Highscores"
    
    // loops through previous scores arrays
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

 function timesUp() {
    
}

// countdown timer
let totalTime = 75
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

function displayWrong() {
    let timeLeft = 2
    console.log("Wrong")
    totalTime -= 10

    let timeInterval = setInterval(function() {
        timeLeft--
    if (timeLeft == 0) {
        clearInterval(timeInterval)
        console.log("Moving On")
    }
    }, 1000)
}



function displayQuestion1() {
    questionText.textContent = questions.question[0]
    console.log(questionText)
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
    console.log("Correct") // TODO: convert to display message

    let timeInterval = setInterval(function() {
        timeLeft--
    if (timeLeft == 0) {
        clearInterval(timeInterval)
        answerText.textContent = ""
        questionText.textContent = questions.question[1]
        console.log(questionText)
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
    console.log("Correct") // TODO: convert to display message

    let timeInterval = setInterval(function() {
        timeLeft--
    if (timeLeft == 0) {
        clearInterval(timeInterval)
        answerText.textContent = ""
        questionText.textContent = questions.question[2]
        console.log(questionText)
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
    console.log("Correct") // TODO: convert to display message

    let timeInterval = setInterval(function() {
        timeLeft--
    if (timeLeft == 0) {
        clearInterval(timeInterval)
        answerText.textContent = ""
        questionText.textContent = questions.question[3]
        console.log(questionText)
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
    console.log("Correct") // TODO: convert to display message

    let timeInterval = setInterval(function() {
        timeLeft--
    if (timeLeft == 0) {
        clearInterval(timeInterval)
        answerText.textContent = ""
        questionText.textContent = questions.question[4]
        console.log(questionText)
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
        answerButton4.addEventListener("click", endScreen)
    }
    }, 1000)
}

function endScreen() {
    let timeLeft = 2
    console.log("Correct") // TODO: convert to display message

    let timeInterval = setInterval(function() {
        timeLeft--
    if (timeLeft == 0) {
        clearInterval(timeInterval)
        questionText.innerHTML = "" // removes main content
        answerText.innerHTML = "" // removes main content
        clearInterval(mainInterval)
    }
    }, 1000)
}

function startQuiz() {
    countdown()
    quiz.innerHTML = "" // removes main content
    highscoreButton.textContent = "" // removes view highscores button

    displayQuestion1()
}

// Pulls local data for previous scores (if any)
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
