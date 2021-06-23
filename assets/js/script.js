document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert(" you clicked submit");
            } else {
                let userChoice = this.getAttribute("data-type");
                alert(`you clicked ${userChoice}`);
            }
        })
    }
})

function runGame() {

}

/**Users choice is taken */

function takePlayerChoice() {


}

takePlayerChoice()

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

console.log(generateComputerChoice())

/**
 * Comapres the user choice from the buttons to the randomly generated computers choice
 */

function decideWinner(userChoice) {

    if (userChoice === comChoice) {
        console.log("game drew");
    } else {
        if (userChoice === "Rock" && comChoice === "Scissor" || "Lizard") {
            console.log("you win")
        } else if (userChoice === "Paper" && comChoice === "Rock" || "Spock") {
            console.log("you win")
        } else if (userChoice === "Scissors" && comChoice === "Paper" || "Lizard") {
            console.log("you win")

        } else if (userChoice === "Lizard" && comChoice === "Spock" || "Paper") {
            console.log("you win")

        } else if (userChoice === "Spock" && comChoice === "Scissor" || "Rock") {
            console.log("you win")

        } else {
            console.log("you lose")
        }
    }
}
decideWinner()

function incrementScore() {

}

function incrementLoss() {

}