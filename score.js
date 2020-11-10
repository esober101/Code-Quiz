var highScores = document.querySelector("#highScoresList");
var backBtn = document.querySelector("#startOver");
var clearBtn = document.querySelector("#clearScores");

clearBtn.addEventListener("click", function () {
    localStorage.clear();
    location.reload();

});

var userScores = localStorage.getItem("userScores");
userScores = JSON.parse(userScores);

    if (userScores !== null) {
    for (var i = 0; i < userScores.length; i++) {
        var scoreEntry = document.createElement("li");
        scoreEntry.textContent = userScores[i].inits + " " + userScores[i].userScore;
        highScores.appendChild(scoreEntry);
    }
}

backBtn.addEventListener("click", function () {
    window.location.replace("index.html");
});


