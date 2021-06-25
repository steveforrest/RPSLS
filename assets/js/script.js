
function runGame() {

}



/**
 * Generates a number between 1 and 5 and asigns it to a computer choice for the game
 * @returns 
 */


function generateComputerChoice() {

    let comChoice = Math.ceil(Math.random() * 5);

    if (comChoice === 1) {
        return "Rock";
    } else if (comChoice === 2) {
        return "Paper";
    } else if (comChoice === 3) {
        return "Scissors";
    } else if (comChoice === 4) {
        return "Lizard";
    } else if (comChoice === 5) {
        return "Spock";
    } else {
        return "error";
    }
}


/**
 * Comapres the user choice from the buttons to the randomly generated computers choice
 */

function decideWinner(userChoice) {

    comChoice = generateComputerChoice();

    if (userChoice === comChoice) {
        console.log("game drew");
    } else {
        if (userChoice === "Rock" && (comChoice == "Scissors" || comChoice == "Lizard")) {
            console.log("you win")
        } else if (userChoice === "Paper" && (comChoice == "Rock" || comChoice == "Spock")) {
            console.log("you win")
        } else if (userChoice === "Scissors" && (comChoice == "Paper" || comChoice == "Lizard")) {
            console.log("you win")
        } else if (userChoice === "Lizard" && (comChoice == "Spock" || comChoice == "Paper")) {
            console.log("you win")
        } else if (userChoice === "Spock" && (comChoice == "Scissors" || Comment == "Rock")) {
            console.log("you win")
        } else {
            console.log("you lose")
        }
    }

        console.log(userChoice);
        console.log(comChoice);
}
decideWinner()

function incrementScore() {

}

function incrementLoss() {

}