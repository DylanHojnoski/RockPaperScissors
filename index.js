function computerPlay() {
    let play = ["rock", "paper", "scissors"];
    return play[Math.floor(Math.random()*3)];
}

let wins = 0;
let loses = 0;

function start(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    const div = document.getElementById("result");

    if(playerSelection == "rock") {
        if(computerSelection == "scissors") {
            div.textContent = "You win! rock beats scissors.";
            wins++;
        }
        else if(computerSelection == "paper") {
            div.textContent ="You lose. Rock loses to paper.";
            loses++;
        }
        else {
            div.textContent = "It's a tie you both picked rock.";
        }
    }
    else if(playerSelection == "paper") {
        if(computerSelection == "rock") {
            div.textContent = "You win! paper beats scissors.";
            wins++;
        }
        else if(computerSelection == "scissors") {
            div.textContent = "You lose. Paper loses to scissors.";
            loses++;
        }
        else {
            div.textContent = "It's a tie you both picked paper.";
        }
    }
    else if(playerSelection == "scissors") {
        if(computerSelection == "paper") {
            div.textContent = "You win! scissors beats paper.";
            wins++;
        }
        else if(computerSelection == "rock") {
            div.textContent = "You lose. Scissors loses to rock.";
            loses++;
        }
        else {
            div.textContent = "It's a tie you both picked scissors";
        }
    }
    whoWins(div);
}
function whoWins(div) {
    const score = document.getElementById("score");
    score.textContent = "You: " + wins + " Computer: " + loses;
    if(wins >= 5) {
        div.textContent = "You Win! You won 5 rounds.";
        wins = 0;
        loses = 0;
    }
    else if(loses >= 5) {
        div.textContent = "You lose. you lost 5 rounds"
        wins = 0;
        loses = 0;
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        start(button.id, computerPlay());
    });
});