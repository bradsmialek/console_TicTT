/**
 * File: /Users/bradsmialek/tlg/javaScript/projects/ticTacToeGame/console_TicTT/board.js
 * Project: /Users/bradsmialek
 * Created Date: Monday, June 1st 2020, 2:06:21 pm
 * Author: Brad Smialek
 */

const inquirer = require('inquirer')
const colors = require('colors/safe')
const emoji = require('node-emoji')
const chalk = require('chalk')

function printBoard(gameBoard) {
  // console.clear()
  const { gameBoard: gb } = gameBoard
  console.log(
    chalk.yellow(gb[0][0], ' ', '|', gb[0][1], ' ', '|', gb[0][2], ' '),
  )
  console.log(chalk.yellow('----+-----+----'))
  console.log(
    chalk.yellow(gb[1][0], ' ', '|', gb[1][1], ' ', '|', gb[1][2], ' '),
  )
  console.log(chalk.yellow('----+-----+----'))
  console.log(
    chalk.yellow(gb[2][0], ' ', '|', gb[2][1], ' ', '|', gb[2][2], ' '),
  )
}

module.exports = { printBoard }
