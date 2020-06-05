/**
 * File: /Users/bradsmialek/tlg/javaScript/projects/ticTacToeGame/console_TicTT/src/playGame.js
 * Project: /Users/bradsmialek/tlg/javaScript/projects/ticTacToeGame/console_TicTT
 * Created Date: Wednesday, June 3rd 2020, 2:30:48 pm
 * Author: Brad Smialek
 */

//TODO: fix choices in emoji.js
//TODO: color banner play

/* ------------------------------------------ Play Game ----------------------------------------- */
let player = require('./playerNames')
let turn = require('./turn')

async function playGame() {
  // let p = await player.playerNames()
  // console.log('playgame', p)

  let gameBoard = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ]
}

module.exports = { playGame }
