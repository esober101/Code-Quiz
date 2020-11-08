var highScores = document.querySelector("#highScoresList");
var backBtn = document.querySelector("#startOver");
var clearBtn = document.querySelector("#clearScores");

clearBtn.addEventListener("click", function () {
    highScores.innerHTML = "";
    window.localStorage.clear();

});

var userScores = localStorage.getItem("userScores");
userScores = JSON.parse(userScores);

function displayScores() {
    if (userScores !== null) {
        var scoreList = document.createElement("ol");
        scoreList.className = "scoreListClass";
    for (var i = 0; i < userScores.length; i++) {
        var initials = userScores[i].inits;
        var scores = userScores[i].userScore;
        var scoreEntry = document.createElement("li");
        scoreEntry.innerHTML = initials + " - " + scores;
        scoreList.appendChild(scoreEntry);
    }
        highScores.appendChild(scoreList);
    }
}

displayScores();

backBtn.addEventListener("click", function () {
    window.location.replace("index.html");
});

