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
let questionDisplay = document.getElementById("question-display")


// object of the five questions and their respective choices
let questions = {
    question: ["Commonly used data type DO NOT include:", "The condition in an if / else statement is enclosed with _____.", "Arrays in JavaScript can be used to store _____.", "String values must be enclosed within _____ when being assigned to variables.", "A very useful tool used during development and debugging for prining content to the debugger is:"],
    answer1: ["Strings", "Boolean", "Alerts", "Numbers"],
    answer2: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
    answer3: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
    answer4: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
    answer5: ["JavaScript", "Terminal/Bash", "For Loops", "Console.log"]
}

let questionNumber = 1
let currentScore = 0

let initials =  []
let scores =  []

// refreshes page to bring back to main menu
function pageRefresh() {
    window.location.reload()
}

// stores highscores to local storage
function setHighscore() {
    console.log(scores.length)

    if (scores.length == 0) {
        scores.unshift(currentScore)
        initials.unshift(input.value)

        localStorage.setItem("initials", JSON.stringify(initials))
        localStorage.setItem("scores", JSON.stringify(scores))
        console.log("New highscore saved")
        return
    } else {
        i = 0
        while (i <= scores.length) {
            if (currentScore <= scores[i]) {
                i++
            } else {
                scores.splice(i, 0, currentScore)
                initials.splice(i, 0, input.value)
                    
                localStorage.setItem("initials", JSON.stringify(initials))
                localStorage.setItem("scores", JSON.stringify(scores))
                console.log("scores saved")
                break
            }
        }
    }
    viewHighscores()
}

function clearHighscores() {
    let getInitials = JSON.parse(localStorage.getItem("initials"))
    let getScores = JSON.parse(localStorage.getItem("scores"))

    getInitials = []
    getScores = []

    localStorage.setItem("initials", JSON.stringify(getInitials))
    localStorage.setItem("scores", JSON.stringify(getScores))

    userList.innerHTML = ""
    scoreList.innerHTML = ""
}

function viewHighscores() {
    quiz.innerHTML = "" // removes main content
    header.innerHTML = "" //removes header content
    questionDisplay.innerHTML = "" // removes question content for end screen to highscore

    // adds return button to highscore page
    let returnMain = document.createElement("button")
    returnMain.textContent = "Return to Menu"
    returnMain.setAttribute("id", "return-button")
    header.appendChild(returnMain)

    returnMain.addEventListener("click", pageRefresh)
    highscoreTitle.textContent = "Highscores"

    // adds clear highscore button to highscore page
    let clearScores = document.createElement("button")
    clearScores.textContent = "Clear Highscores"
    clearScores.setAttribute("id", "clear-button")
    header.appendChild(clearScores)

    clearScores.addEventListener("click", clearHighscores)
    
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

// triggers out of time function
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
let totalTime = 60 // TODO: make sure timer is set to 60
let mainInterval = 0
function countdown() {
    mainInterval = setInterval(function() {
        totalTime--
        timer.textContent = totalTime
    if (totalTime <= 0) {
        clearInterval(mainInterval)
        timesUp()
    }
    }, 1000)
}

// displays when wrong answer is selected
function displayWrong() {
    let timeLeft = 2
    totalTime -= 10
    questionNumber++

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
        displayQuestion()
    }
    }, 1000)
}

// displays when wrong answer is selected
function displayCorrect() {
    let timeLeft = 2
    currentScore += 5

    console.log("Correct")
    console.log("Current Score: " + currentScore)
    
    guess.textContent = "Correct!"
    guess.setAttribute("id", "guess")
    guess.setAttribute("style", "border-top: 3px lightgrey solid")

    let timeInterval = setInterval(function() {
        timeLeft--
    if (timeLeft == 0) {
        clearInterval(timeInterval)
        console.log("Moving On")
        guess.textContent = ""
        guess.setAttribute("style", "border-top: none")
        questionNumber++
        displayQuestion()
        console.log(questionNumber)
    }
    if (timeLeft == 0 && questionNumber == 6)
        endScreen()
    }, 1000)
}

// displays for each question (individual)
function displayQuestion() {
    if (questionNumber == 1) {
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
        answerButton3.addEventListener("click", displayCorrect)
        answerButton4.addEventListener("click", displayWrong)
    } else if (questionNumber == 2) {
        questionText.textContent = questions.question[1]
        answerText.textContent = ""
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
        answerButton3.addEventListener("click", displayCorrect)
        answerButton4.addEventListener("click", displayWrong)
    } else if (questionNumber == 3) {
        questionText.textContent = questions.question[2]
        answerText.textContent = ""
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
        answerButton3.addEventListener("click", displayCorrect)
        answerButton4.addEventListener("click", displayWrong)
    } else if (questionNumber == 4) {
        questionText.textContent = questions.question[3]
        answerText.textContent = ""
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
        answerButton3.addEventListener("click", displayCorrect)
        answerButton4.addEventListener("click", displayWrong)
    } else if (questionNumber == 5) {
        questionText.textContent = questions.question[4]
        answerText.textContent = ""
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
        answerButton3.addEventListener("click", displayCorrect)
        answerButton4.addEventListener("click", displayWrong)
    }
}

// display end screen
function endScreen() {
    clearInterval(mainInterval)
    questionText.innerHTML = "" // removes main content
    answerText.innerHTML = "" // removes main content

    timeUp.textContent = ""
    timeUp.setAttribute("style", "border-top: none")

    let h1 = document.createElement("h1")
    quiz.appendChild(h1)
    h1.setAttribute("id", "content-header")
    h1.textContent = "Quiz Complete!"

    let p = document.createElement("p")
    quiz.appendChild(p)
    p.textContent = "Please Input Initials"

    let flex = document.createElement("div")
    flex.setAttribute("style", "display:flex; flex-direction:column; align-items:center")
    quiz.appendChild(flex)

    let input = document.createElement("input")
    input.setAttribute("id", "input")
    input.setAttribute("type", "text")
    input.setAttribute("style", "width:15%")
    flex.appendChild(input)

    let submit = document.createElement("button")
    submit.textContent = "Submit"
    submit.setAttribute("id", "submit")
    submit.setAttribute("style", "width:10%")
    flex.appendChild(submit)

    currentScore += Number(timer.textContent)
    console.log(currentScore)

    submit.addEventListener("click", setHighscore)
}

function startQuiz() {
    countdown()

    quiz.innerHTML = "" // removes main content
    highscoreButton.textContent = "" // removes view highscores button

    displayQuestion()
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
