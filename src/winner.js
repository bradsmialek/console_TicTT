/**
 * File: /Users/bradsmialek/tlg/javaScript/projects/ticTacToeGame/console_TicTT/src/turnSomething.js
 * Project: /Users/bradsmialek/tlg/javaScript/projects/ticTacToeGame/console_TicTT
 * Created Date: Thursday, June 4th 2020, 12:40:25 am
 * Author: Brad Smialek
 */

const winner = function (gameBoard, player, row, col) {
  const { gameBoard: gb } = gameBoard

  // check horizontal
  if (gb[row][(col + 2) % 3] === player && gb[row][(col + 1) % 3] === player) {
    return true
  }

  // check vertical
  if (gb[(row + 2) % 3][col] === player && gb[(row + 1) % 3][col] === player) {
    return true
  }
  // check major diag
  if (
    row === col &&
    gb[(row + 2) % 3][(col + 2) % 3] === player &&
    gb[(row + 1) % 3][(col + 1) % 3] === player
  ) {
    return true
  }
  // check minor diag
  if (
    row + col === 2 &&
    gb[(row + 2) % 3][(col + 1) % 3] === player &&
    gb[(row + 1) % 3][(col + 2) % 3] === player
  ) {
    return true
  }
  console.log('falsy falsy falelsy')

  return false
}

module.exports = { winner }
