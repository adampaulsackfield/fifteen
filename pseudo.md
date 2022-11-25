# Pseudo Code

## Plan

- Create a Game Class, with constructor for: score, highScore, moves, time, solved etc.
- Game Class should hold any methods related to the game.
- Create logic in console first, unit test and then implement in the browser.
- Work on design, mobile first and implement responsive features.

## Methods

- startGame - responsible for starting a new game.
- makeMove - responsible for acting when the user makes a move.
- checkSpace - responsible for checking for legal moves.
- buildGame - responsible for taking current game states and rendering to the page.
- setScore - responsible for storing the scores in a DB.
- getScore - responsible for getting the scores from a DB.

## Walk through

- User clicks start game,
- startGame function sets all relevant scores and timers.
- buildGame is called which will render a random game board.
- player can make moves based on empty space around them, I can implement this .feature with a 2D array and when the target number is clicked we can use its index to check for empty space around it, see below for example.
- if empty space, then swap the selected tile with the empty one, then.
- buildGame is run again, this time passing in the new game state.
- if solved === 15 then we can be sure the game is over.
