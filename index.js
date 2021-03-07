function computerPlay() {
    let play = ["rock", "paper", "scissors"];
    return play[Math.floor(Math.random()*3)];
}

function start(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log(computerSelection);

    if(playerSelection == "rock") {
        if(computerSelection == "scissors") {
            return "You win! rock beats scissors.";
        }
        else if(computerSelection == "paper") {
            return "You lose. Rock loses to paper";
        }
        else {
            return "It's a tie you both picked rock";
        }
    }
    else if(playerSelection == "paper") {
        if(computerSelection == "rock") {
            return "You win! paper beats scissors.";
        }
        else if(computerSelection == "scissors") {
            return "You lose. Paper loses to scissors";
        }
        else {
            return "It's a tie you both picked paper";
        }
    }
    else if(playerSelection == "scissors") {
        if(computerSelection == "paper") {
            return "You win! scissors beats paper.";
        }
        else if(computerSelection == "rock") {
            return "You lose. Scissors loses to rock";
        }
        else {
            return "It's a tie you both picked scissors";
        }
    }
    else {
        return "You put in an invalid answer";
    }
}

function game() {
    let wins = 0;
    let loses = 0;
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Type: rock, paper, or scissors", "rock");
        let result = start(playerSelection, computerPlay());
        console.log(result);
        if(result.search("win")) {
            wins++;
        }
        else if(result.search("lose")) {
            loses++;
        }
    }
    if(wins > loses) {
        console.log("You win!")
    }
    else if(wins < loses) {
        console.log("You lose.")
    }
    else {
        console("It's a tie");
    }
}