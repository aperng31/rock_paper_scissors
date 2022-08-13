console.log("Hello World");

function getComputerChoice() {
    let numRandom = Math.random();
    console.log(numRandom);
    if (numRandom <= (1/3)) {
        return "rock";
    }
    else if (numRandom <= (2/3)) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
function playRound(playerSel, computerSel) {
    playerSel = playerSel.toLowerCase();

    if (playerSel == "rock") {
        if (computerSel == "paper") {
            console.log("Computer Wins");
            return 2;
        }
        else if (computerSel == "scissors") {
            console.log("Player Wins");
            return 1;
        }
        else {
            console.log("Tie");
        }
    }
    else if (playerSel == "paper") {
        if (computerSel == "scissors") {
            console.log("Computer Wins");
            return 2;
        }
        else if (computerSel == "rock") {
            console.log("Player Wins");
            return 1;
        }
        else {
            console.log("Tie");
        }
    }
    else {
        if (computerSel == "rock") {
            console.log("Computer Wins");
            return 2;
        }
        else if (computerSel == "paper") {
            console.log("Player Wins");
            return 1;
        }
        else {
            console.log("Tie");
        }
    }
}

function checkChoice(choice) {
    choice = choice.toLowerCase();
    console.log(choice);
    if (choice === ("rock" || "paper" || "scissors")) {     
        return 1;
    }
    else {
        return 0;
    }

}

function game() {

    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSel;
        do {
            playerSel = prompt("Rock, Paper, or Scissors?");
        } while (checkChoice(playerSel) == 0)

        computerSel = getComputerChoice();

        if (playRound(playerSel, computerSel)) {
            playerScore++;
        }
        else if (playRound(playerSel, computerSel) == 2) {
            computerScore++;
        }
    }

    console.log("P" + playerScore);
    console.log("C" + computerScore);

    if (playerScore > computerScore) {
        console.log("Player Wins Match");
    }
    else if (playerScore < computerScore) {
        console.log("Computer Wins Match");
    }
    else {
        console.log("Tie Match");
    }
}

game();