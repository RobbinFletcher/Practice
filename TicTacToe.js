let playerO = "O";
let playerX = "X";
let currentPlayer = playerO;

//               1   2   3   4   5   6   7   8
let gameBoard = ["", "", "", "", "", "", "", ""];
let gameCells;

window.onload = function() {
    gameCells = document.getElementsByClassName("game-cell");
    for(let cell of gameCells){
        cell.addEventListener("click", placeCell);
    }
}

function placeCell(){
    this.innerText = currentPlayer;

}