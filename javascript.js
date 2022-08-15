//initialize scores
let playerScore = 0;
let computerScore = 0;
const pScore = document.querySelector('.playerScore');
const cScore = document.querySelector('.compScore');
updateScore();

//initialize selections
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', play));
let playerSel = '';
let compSel = '';
const pSel = document.querySelector('.playerSel');
const cSel = document.querySelector('.compSel');

//hasWon boolean to detect if anybody has won
const winner = document.querySelector('.winner');
let hasWon = false;

function play() {
    restart();
    playerSel = this.id;
    console.log(playerSel);

    playRound(playerSel);
    updateScore();
    updateSel();

    //check if anybody has scored 5
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            winner.textContent = "Player Wins Match";
        }
        else {
            winner.textContent = "Computer Wins Match";
        }
        //indicate that somebody has won
        hasWon = true;
    }
}

function getComputerChoice() {
    let numRandom = Math.random();
    console.log(numRandom);
    if (numRandom <= (1/3)) {
        return "gun";
    }
    else if (numRandom <= (2/3)) {
        return "man";
    }
    else {
        return "bear";
    }
}

//play round based on selection of player
function playRound(sel) {
    sel = sel.toLowerCase();
    const computerSel = getComputerChoice();
    compSel = computerSel;

    if (sel == "gun") {
        if (computerSel == "man") {
            console.log("Computer Wins");
            computerScore++;
        }
        else if (computerSel == "bear") {
            console.log("Player Wins");
            playerScore++;
        }
        else {
            console.log("Tie");
        }
    }
    else if (sel == "man") {
        if (computerSel == "bear") {
            console.log("Computer Wins");
            computerScore++;
        }
        else if (computerSel == "gun") {
            console.log("Player Wins");
            playerScore++;
        }
        else {
            console.log("Tie");
        }
    }
    else {
        if (computerSel == "gun") {
            console.log("Computer Wins");
            computerScore++;
        }
        else if (computerSel == "man") {
            console.log("Player Wins");
            playerScore++;
        }
        else {
            console.log("Tie");
        }
    }
}

function updateScore() {
    pScore.textContent = `Player Score: ${playerScore}`;
    cScore.textContent = `Computer Score: ${computerScore}`;
}

function updateSel() {
    pSel.textContent = `Player Selected: ${playerSel}`;
    cSel.textContent = `Computer Selected: ${compSel}`;
}

function restart() {
    if (!hasWon) {
        return;
    }
    if (playerScore != 5 && computerScore != 5) {
        return;
    }
    playerScore = 0;
    computerScore = 0;
    updateScore();
    winner.textContent = "";
}

/*function checkChoice(choice) {
    choice = choice.toLowerCase();
    console.log(choice);
    if (choice === "gun" || choice === "man" || choice === "bear") {     
        return 1;
    }
    else {
        return 0;
    }

}*/

/*function game(button) {

    for (let i = 0; i < 5;i++) {
    let playerSel; 
    do {
        playerSel = prompt("gun, man, or bear?");
    } while (checkChoice(playerSel) == 0)*/

    //computerSel = getComputerChoice();
    //let result = playRound(playerSel, computerSel);

    /*if (result == 1) {
        playerScore++;
    }
    else if (result == 2) {
        computerScore++;
    }*/

    /*console.log("Player score: " + playerScore);
    console.log("Comp score: " + computerScore);

    if (playerScore > computerScore) {
        console.log("Player Wins Match");
    }
    else if (playerScore < computerScore) {
        console.log("Computer Wins Match");
    }
    else {
        console.log("Tie Match");
    }
}*/

/*function setSel() {
    playerSel = this.id;
    console.log(playerSel);
    return playerSel;
}*/
