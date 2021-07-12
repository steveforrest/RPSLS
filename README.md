# RPSLS

## Contents

* [Contents](#contents)
* [Name](#name)
* [Description](#description)
* [Features](#features)
* [Game Play](#game-play)
* [Testing](#testing)
* [Technologies](#technologies)
* [Deployment](#deployment)
* [Future Additions](#future-additions)

## Name

RPSLS - or better known as Rock Paper Scissors Lizard Spock

## Description

Have you ever needed a way to decide something, feel a flip of a coin is too cliche or rock paper scissors is too easy to just have a draw game? Then look no further, Rock Paper Scissors Lizard Spock allows you a first to 5 ways of deciding what ever youd like or just play for fun or to pass the time.
A simple design that allows you to see the rules in 2 different forms (an image or video), five buttons that allow you to make your selection for the game, a simplae score board and a modal tht will pop up to tell you the outcome of the game aloows quick and easy to understand way of playing.
This game is made with bright primary colours with children in mind.

![imagename](assets/images/responsiveness.png)

## Features

This game is aimed at a younger demographic and so i chose to use bright colours to best attract them to the game. I opted to use the default font family as this will be safest for any browser and clear enough so as not to confuse children when reading it.

### Rules

The rules will be displayed using two different media types of an image for quick reference or an embedded you tube extract from the big bang theory to better explain the game.

1. ![imagename](assets/images/rulesImg.jpeg)
---

2. ![imagename](assets/images/RPSLSHeroImage.jpg)

### Game play

To start the game the user will click one of 5 buttons these buttons will be passed into a function that compares the user’s choice to the computers choice which is found from a randomly generated number. This is then passed to a modal stating the user’s choice and the computers choice aswell as the outcome of the game, it then increments the score for the computer or the player.

### Keeping track of the score

Each time a game is won or lost the corresponding increment function will be called this will update the score board. If either score is equal to or greater than 5 a modal will appear saying game over and allowing you to reset the scores, once this is clicked both scores will be reset back to 0, ready to play again.

## How to Use the Game

1. There is a rules button that allows you to have a modal open displaying an image with the rules on and a video with rules on.
2. To play the game you simplay click on one of the buttons you will then be displayed with you have won lost or drew and the score is incremented.
3. close the modal and play again util either side gets 5 points the game is then over and you can reset the game.

## Testing

How I have tested the code:
* I have checked each of the buttons ensuring they give the desired outcome.
* I have console logged each of the outtcome at verious stages and compared the outcomes.
* I have tested the rules button several times, upon clicking it the rules image and video would appear clicking the x closed the modal.
* I tested the game by clicking the first button (paper)
* I checked the outcome of what the modal said to ensure it was as it should be.
* I checked that each time the player chose something and that the game was either a win or a loss one of the scores would be incremented.
* I clicked the ok button which closed the modal.
* I then repeated to click on the paper icon, check the outcome enetered in the modal and click on the ok button to close the modal untill either of the scores reached 5. 
* I checked that when one of the scores reached 5 and the results modal was closed tht the game over modal would display.
* I then clicked reset and checked that the scores were reset to 0.
* I repeated these steps 3 times.
I then repeated the above steps for all the other buttons.

### Bugs

1. while writing the site i noticed an issue between clicking play game and Rules buttons where one would not replace the other instead, they would stack on top of each other.

2. Video wont display on modal - This was caused by a rogue line of code in the Java Script setting the display of the video to none.

3. Modal wont close when button is clicked - This was caused by several typos when resolved the modals closed as intended.

### Unresolved Bugs

* The rules modal is unresponsive and on mobile devices does not look very good, it requires scrolling to the right in order to close down.

### Validation

* HTML - No errors returned from [w3C validator](https://validator.w3.org/nu/#textarea)
* CSS - No errors found from [JigSaw](https://jigsaw.w3.org/css-validator/validator)
* JavaScript - No errors were returned from [JS Hint](https://jshint.com/), 5 unused variables are found but these are due to the onclicks being used within the html, the metrics were as follows: -
    * There are 17 functions in this file.
        * Function with the largest signature take 1 argument, while the median is 0.
        * Largest function has 28 statements in it, while the median is 2.
        * The most complex function has a cyclomatic complexity value of 17 while the median is 1.

## Technologies

* [HTML](https://en.wikipedia.org/wiki/HTML)
* [CSS](https://en.wikipedia.org/wiki/CSS)
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

## Deployment

1. Go to https://github.com/
2. Select the correct repository
3. Click settings
4. Click pages
5. Select source and choose master
6. Your sites path will now be shown

### Cloning

How to clone this repositiory. [How to clone a github repositry](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)

* On GitHub go to the main page of the Repository.
* Above the list of files click the code button with the drop-down arrow.
* To clone the repository using HTTPS, under "Clone with HTTPS", click on the clipboard.
* Open the Git Bash terminal.
* Change the current working directory to the location where you want the cloned directory.
* Type git clone, and then paste the URL you copied earlier from step 3.
* Press Enter to create your local clone.

## Future Additions

In future addition I would like to add: -
* Different themes to allow the user to change the way the game is displayed for example paper would be the default theme scissors would be metalic thems spock would be a sci-fi them etc. for example the spock one would have a sci-fi back ground all together darker with.
* I would like to add an ability to play against other people.

## Citations

* [YouTube clip of explaining game - Wozamil](https://www.youtube.com/watch?v=x5Q6-wMx-K8&t=11s)
* [Rock, paper, scissors, lizard spock rules diagram](https://www.seekpng.com/ipng/u2q8u2a9q8a9t4r5_play-rock-paper-scissors-lizard-spock/)
* [Font Awesome](https://fontawesome.com/)
* [Hero image taken from homy shirt](https://homyshirt.com/en/rock/6797-t-shirt-rock-paper-scissors-lizard-black-spock-sublimation.html)

