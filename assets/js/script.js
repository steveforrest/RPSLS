/**
 * Generates a number between 1 and 5 and asigns it to a computer choice for the game
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
    let result;
    if (userChoice === comChoice) {
        console.log('Result from game = ' + "game drew");
        result = 'Draw!'
        showResult();
    } else {
        if (userChoice === "Rock" && (comChoice == "Scissors" || comChoice == "Lizard")) {
            console.log('Result from game = ' + "Win!")
            incrementScore();
            showResult();
            result = 'Win!'
        } else if (userChoice === "Paper" && (comChoice == "Rock" || comChoice == "Spock")) {
            console.log('Result from game = ' + "you win")
            incrementScore();
            showResult();
            result = 'Win!'
        } else if (userChoice === "Scissors" && (comChoice == "Paper" || comChoice == "Lizard")) {
            console.log('Result from game = ' + "you win")
            incrementScore();
            showResult();
            result = 'Win!'
        } else if (userChoice === "Lizard" && (comChoice == "Spock" || comChoice == "Paper")) {
            console.log('Result from game = ' + "you win")
            incrementScore();
            showResult();
            result = 'Win!'
        } else if (userChoice === "Spock" && (comChoice == "Scissors" || comChoice == "Rock")) {
            console.log('Result from game = ' + "you win")
            incrementScore();
            showResult();
            result = 'Win!'
        } else {
            console.log('Result from game = ' + "you lose")
            incrementLoss();
            showResult();
            result = 'Loss!'
        }
    }

    console.log('print out of users choice at end of decide winner function = ' + userChoice);
    console.log('print out of users choice at end of decide winner function = ' + comChoice);
    console.log('endof decideWinner');


    userChose(userChoice);
    gameResult(result);
    computerChose(comChoice);

    return result;

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
 * to allow to show rules
 */

function showRules() {


    //get modal element
    let modal = document.getElementById("rules-modal");
    //get open modal button
    let RulesButton = document.getElementById("modal-button");
    //get close modal button
    let closeModal = document.getElementById("closeModal");

    // get starting state of modal
    let startingStateModal = getComputedStyle(modal).getPropertyValue('display');

    modal.style.display = "flex";
}

/**
 * to allow to hide rules
 */

function hideRules() {
    //get modal element
    let modal = document.getElementById("rules-modal");
    //get open modal button
    let RulesButton = document.getElementById("modal-button");
    //get close modal button
    let closeModal = document.getElementById("closeModal");
    // get starting state of modal
    let startingStateModal = getComputedStyle(modal).getPropertyValue('display');

    modal.style.display = "none";
}


/**
 * Create a modal that is called up when the 
 * decide winner function is called and states what you chose what computer chose and the game result
 */

function showResult() {


    //get modal element
    let modal = document.getElementById("resultsModal");

    // get starting state of modal
    let startingStateModal = getComputedStyle(modal).getPropertyValue('display');


    modal.style.display = "block";
    userChose()

}

function hideResult() {


    //get modal element
    let modal = document.getElementById("resultsModal");

    // get starting state of modal
    let startingStateModal = getComputedStyle(modal).getPropertyValue('display');

    modal.style.display = "none";



}

function userChose(whatUserChose) {
    console.log('whatUserChose from with userChose function = ' + whatUserChose)
    const usersChoice = document.getElementById("user-chose");
    usersChoice.innerHTML = whatUserChose;
    console.log('userschoice = ' + usersChoice);
}


function gameResult(gameResult){
    console.log('gameResult from gameResult function = ' + gameResult)
    const gameEnded = document.getElementById("game-result");
    gameEnded.innerHTML = gameResult;
    console.log('gameRusult = ' + gameEnded);
}

function computerChose(computerChose) {
    console.log('computerChose form the computerChose function ' + computerChose)
    const computersChoice = document.getElementById("computer-chose");
    computersChoice.innerHTML = computerChose;
}
 /**
  * will reset the score when called
  */
function resetScore(){
    const scored = document.getElementById(score);
    scored.innerHTML = '0';
}


 /**
  * will reset the score when called
  */
  function resetLoss(){
    const lost = document.getElementById(score);
    lost.innerHTML = '0';
}
