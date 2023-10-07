let quiz = document.getElementById("quiz")
let contentHeader = document.getElementById("content-header")
let highscoreButton = document.getElementById("highscore-button")
let highscoreTitle = document.getElementById("highscore-title")
let startButton = document.getElementById("start-button")
let userList = document.getElementById("user-list")
let scoreList = document.getElementById("score-list")
let header = document.getElementById("header")
let timer = document.getElementById("timer")

// object of the five questions and their respective choices
let questions = {
    question: ["Commonly used data type DO NOT include:", "The condition in an if / else statement is enclosed with _____.", "Arrays in JavaScript can be used to store _____.", "String values must be enclosed within _____ when being assigned to variables.", "A very useful tool used during development and debugging for prining content to the debugger is:"],
    choice1: ["Strings", "Quotes", "Numbers and Strings", "Commas", "JavaScript"],
    choice2: ["Boolean", "Curly Brackets", "Other Arrays", "Curly Brackets", "Terminal/Bash"],
    choice3: ["Alerts", "Parenthesis", "Booleans", "Quotes", "For Loops"],
    choice4: ["Numbers", "Square Brackets", "All of the Above", "Parenthesis", "Console.log"],
}

let initials =  ["DB"]
let scores =  [0]

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

function countdown() {
    // TODO: change timer to 60
    let timeLeft = 5

    let timeInterval = setInterval(function() {
        timeLeft--
        timer.textContent = timeLeft
    if (timeLeft == 0) {
        clearInterval(timeInterval)
        endScreen()
    }
    }, 1000)
}

function startQuiz() {
    quiz.innerHTML = "" // removes main content
    countdown()
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
