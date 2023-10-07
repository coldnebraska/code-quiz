let quiz = document.getElementById("quiz")
let content = document.getElementById("content-header")
let highscoreButton = document.getElementById("highscore-button")
let highscoreTitle = document.getElementById("highscore-title")
let startButton = document.getElementById("start-button")
let userList = document.getElementById("user-list")
let scoreList = document.getElementById("score-list")
let header = document.getElementById("header")


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

function startQuiz() {
    
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
