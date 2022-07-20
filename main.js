function getPlayerNameAndStart() {
    const playerName = window.prompt("Let's play rock, paper, scissors! Firstly, please enter your name below");
    window.alert(`Welcome ${playerName}! time to play, get ready. Best out of 5 wins. Press OK when you're ready to play!`);
    return playerName;
}
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[~~(Math.random() * choices.length)];
    return computerChoice;
}
function getPlayerChoice(playerName) {
    const promptTexts = [ 
        `Rock, paper or scissors? what will it be ${playerName}`,
        `Choose wisely, ${playerName}. Rock, paper or scissors?`,
        `Don't be scared, ${playerName}. Rock, paper or scissors?`,
        `Rock, paper or scissors? Take your pick, ${playerName}!`,
        `So what does ${playerName} choose? Rock, paper or scissors?`
    ]
    const playerChoice = window.prompt(
        promptTexts[~~(Math.random() * promptTexts.length)]
    );
    return playerChoice.toLowerCase();
};
function playRound(playerChoice, computerChoice, weapons) {
    let winner;
    if (weapons[playerChoice].strongTo === computerChoice) {
        alert(`${playerChoice} beats ${computerChoice}! You win!`);
        winner = 'player';
        return winner;
    }
    if (weapons[playerChoice].weakTo === computerChoice) {
        alert(`${computerChoice} beats ${playerChoice}! you lose!`);
        winner = 'computer';
        return winner;
    }
};
function game() {
    const weapons = {
        rock: {
            weakTo: 'paper',
            strongTo: 'scissors'
        },
        paper: {
            weakTo: 'scissors',
            strongTo: 'rock'
        },
        scissors: {
            weakTo: 'rock',
            strongTo: 'paper'
        }
    };
    let scoreBoard = {
        playerScore: 0,
        computerScore: 0,
    };
    let { playerScore, computerScore } = scoreBoard;
    const playerName = getPlayerNameAndStart();
    for (let i = 0; i < 5; i++){
        if (
            (i >= 2) &&
            (
                playerScore >= 3 && computerScore <= 1 ||
                computerScore >= 3 && playerScore <= 1
            )
        ) {
            playerScore > computerScore ?
                (alert(`Congratulations, ${playerName}. YOU ARE THE WINNER!`)) : (`Better luck next Time, ${playerName}. YOU LOSE!`);
        } else if (i === 4) {
            const roundWinner = playRound(
                playerChoice = getPlayerChoice(playerName),
                computerChoice = getComputerChoice(),
                weapons
            );
            if (roundWinner == 'player') {
                playerScore++;
                alert(`Congratulations, ${playerName}. YOU ARE THE WINNER! \n SCORE \n ${playerName}: ${playerScore} - Computer: ${computerScore}`) ;
            } else {
                computerScore++;
                alert(`Better luck next Time, ${playerName}. YOU LOSE! \n SCORE \n ${playerName}: ${playerScore} - Computer: ${computerScore}`);
            }
        } else {
            const roundWinner = playRound(
                playerChoice = getPlayerChoice(playerName),
                computerChoice = getComputerChoice(),
                weapons
            );
            if (roundWinner == 'player') {
                playerScore++;
                alert(`SCORE \n ${playerName}: ${playerScore} - Computer: ${computerScore}`);
            } else {
                computerScore++;
                alert(`SCORE \n ${playerName}: ${playerScore} - Computer: ${computerScore}`);
            }
        }
    };
}
game();