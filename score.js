// Iteration 8: Making scoreboard functional

let scoreboard = document.getElementById("score-board");

var urlQuery = new URLSearchParams(window.location.search);
console.log(urlQuery)

var score = urlQuery.get("score")

console.log(typeof score,score)

scoreboard.innerHTML = score;

const playAgainButton = document.getElementById("play-again-button")

playAgainButton.onclick=()=>{
    location.href = "./game.html"
}