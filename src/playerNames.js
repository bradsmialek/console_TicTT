/**
 * File: /Users/bradsmialek/tlg/javaScript/projects/ticTacToeGame/console_TicTT/src/playerTwo.js
 * Project: /Users/bradsmialek/tlg/javaScript/projects/ticTacToeGame/console_TicTT
 * Created Date: Wednesday, June 3rd 2020, 12:51:22 pm
 * Author: Brad Smialek
 */

/* -------------------------------------- Modules ------------------------------------- */
const colors = require('colors/safe')
let e = require('./emoji')
const inquirer = require('inquirer')
const promiseInq = require('inquirer-promise')
let board = require('./board')
let turn = require('./turn')

/* -------------------------------------- Get Players Names ------------------------------------- */
function playerNames() {
  let playerOneName = ''
  let p1piece = ''
  let playerTwoName = ''
  let p2piece = ''

  let gameBoard = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ]

  let questions = [
    {
      type: 'input',
      name: 'playerOne',
      message: colors.blue.underline('What is your name player 1 \n'),
      validate: function (value) {
        if (value) {
          return true
        }
        return `Please enter a name.`
      },
    },
    {
      type: 'list',
      name: 'p1Piece',
      message: colors.yellow(`Please pick your emoji piece`),
      choices: e.emojis(),
    },
    {
      type: 'input',
      name: 'playerTwo',
      message: colors.blue.bold('What is your name player 2 \n'),
      validate: function (value) {
        if (value) {
          return true
        }
        return `Please enter a name.`
      },
    },
    {
      type: 'list',
      name: 'p2Piece',
      message: colors.yellow(`Please pick your emoji piece`),
      choices: e.emojis(),
    },
  ]

  inquirer.prompt(questions).then((answers) => {
    playerOneName = answers.playerOne
    p1piece = answers.p1Piece
    playerTwoName = answers.playerTwo
    p2piece = answers.p2Piece
    console.log(
      colors.inverse.italic(
        `Get ready to play ${playerOneName} and ${playerTwoName} !!`,
      ),
    )

    turn.takeTurn({
      playerOneName,
      p1piece,
      playerTwoName,
      p2piece,
      gameBoard,
    })
  })
}

module.exports = { playerNames }
