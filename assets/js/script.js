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
    } else if (comChoice === 4){
        return "Lizard";
    } else if (comChoice === 5){
    return "Spock";
}else{
    return "error";
}
}

console.log(generateComputerChoice())

function decideWinner() {

}

function incrementScore() {

}

function incrementLoss() {

}