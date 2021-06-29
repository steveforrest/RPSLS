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
            incrementScore();
        } else if (userChoice === "Paper" && (comChoice == "Rock" || comChoice == "Spock")) {
            console.log("you win")
            incrementScore();
        } else if (userChoice === "Scissors" && (comChoice == "Paper" || comChoice == "Lizard")) {
            console.log("you win")
            incrementScore();
        } else if (userChoice === "Lizard" && (comChoice == "Spock" || comChoice == "Paper")) {
            console.log("you win")
            incrementScore();
        } else if (userChoice === "Spock" && (comChoice == "Scissors" || Comment == "Rock")) {
            console.log("you win")
            incrementScore();
        } else {
            console.log("you lose")
            incrementLoss();
        }
    }

    console.log(userChoice);
    console.log(comChoice);
}



/**
 * gets current score from the DOM and increases it by one
 */

function incrementScore() {

    let previousScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++previousScore;
}

/**
 * gets current loss from the DOM and increases it by one
 */

function incrementLoss() {

    let previousLoss = parseInt(document.getElementById("loss").innerText);
    document.getElementById("loss").innerText = ++previousLoss;
}

/**
 * Game checks game win/loss limit is not reached
 */

function win() {
    let win2Win = parseInt(document.getElementsByClassName("howManyWins"))
    console.log(win2Win)
}
win()


/**
 * to allow to hide and show sections
 */

function showRules(){
    let showImg = document.getElementById("rulesImg");
    if(showImg.style.display == "none"){
        showImg.style.display == "block";
    }else{
        showImg.style.display == "none";
    }
    
    console.log(showImg);
}

showRules()