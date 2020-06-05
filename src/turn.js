/**
 * File: /Users/bradsmialek/tlg/javaScript/projects/ticTacToeGame/console_TicTT/turn.js
 * Project: /Users/bradsmialek/tlg/javaScript/projects/ticTacToeGame/console_TicTT
 * Created Date: Wednesday, June 3rd 2020, 2:54:34 pm
 * Author: Brad Smialek
 */

/* ------------------------------------------- Modules ------------------------------------------ */

const inquirer = require('inquirer')
const promiseInq = require('inquirer-promise')
let board = require('./board')
let check = require('./winner')

/* ---------------------------------------- Turn Manager ---------------------------------------- */

let tmpn = []
let tmpp = []
let checks = true

function takeTurn(gameBoard) {
  // console.clear()

  const {
    playerOneName: p1,
    p1piece: p1p,
    playerTwoName: p2,
    p2piece: p2p,
    gameBoard: gb,
  } = gameBoard
  // console.log(p1, p1p, p2, p2p)

  if (tmpp.indexOf(p1p) !== -1) {
  } else {
    tmpn.push(p1)
    tmpn.push(p2)
    tmpp.push(p1p)
    tmpp.push(p2p)
  }

  let randomName = tmpn[0]
  let randomPlayer = tmpp[0]

  if (checks) {
  } else {
    randomName = tmpn[1]
    randomPlayer = tmpp[1]
  }

  board.printBoard(gameBoard)

  console.log(`\n ${randomName} make your move: \n`)

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'quantity',
        message: '[1-9]',
        validate: function (value) {
          let valid = !isNaN(parseFloat(value))
          let right = value > 0 && value < 10

          if (valid && right) {
            return true
          } else {
            return 'Please enter a number [1-9]'
          }
        },
      },
    ])
    .then((answers) => {
      move = answers.quantity

      ////////////////////////////////////////////////////////////////
      var row = Math.floor((move - 1) / 3)
      var col = (move - 1) % 3

      if (gb[row][col] !== tmpp[0] && gb[row][col] !== tmpp[1]) {
        console.log('true kkkksfknslknslkvnsl[knlkns')

        if (randomPlayer === tmpp[0]) {
          console.log('double true')
          gb[row][col] = randomPlayer
        } else if (randomPlayer === tmpp[1]) {
          console.log('bannaana')

          gb[row][col] = randomPlayer
        }
      } else {
        console.log('Please select a valid square.')

        takeTurn(gameBoard)
      }

      ////////////////////////////////////////////////////////////////////
      if (check.winner(gameBoard, randomPlayer, row, col)) {
        console.log('im here now at 78')

        board.printBoard(gameBoard)

        console.log(`${randomName} wins!`)
        console.log('Play again? (y/n)')

        prompt.get(['answer'], function (err, result) {
          /* ------------------------------------------- //TODO: ------------------------------------------ */

          if (err) {
            return onErr(err)
          }

          if (result.answer.toLowerCase() === 'y') {
            startGame()
          } else {
            console.log('Thanks for playing!')
          }
        })
      } else {
        checks = checks === false ? true : false
        takeTurn(gameBoard)
      }
    })
}

function setPlayers(players, names) {
  let player1 = players.p1
  let player2 = players.p2
  let name1 = names.p1
  let name2 = names.p1

  return { player1, player2, name1, name2 }
}

function getPlayers() {}

module.exports = { takeTurn }
