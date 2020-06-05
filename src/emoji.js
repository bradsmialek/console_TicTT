/**
 * File: /Users/bradsmialek/tlg/javaScript/projects/ticTacToeGame/console_TicTT/tester.js
 * Project: /Users/bradsmialek/tlg/javaScript/projects/ticTacToeGame/console_TicTT
 * Created Date: Wednesday, June 3rd 2020, 9:48:18 am
 * Author: Brad Smialek
 */

/* --------------------------------------- Array of Emojis -------------------------------------- */

const emoji = require('node-emoji')

function emojis() {
  let emojiArr = []

  for (let i = 0; i < 5; i++) {
    emojiArr[i] = emoji.random().emoji
  }
  let choice = 'More Choices!'
  emojiArr.push(choice)
  return emojiArr
}

module.exports = { emojis }
