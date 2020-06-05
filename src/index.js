/**
 * File: /Users/bradsmialek/tlg/javaScript/projects/ticTacToeGame/console_TicTT/index.js
 * Project: /Users/bradsmialek
 * Created Date: Monday, June 1st 2020, 2:04:29 pm
 * Author: Brad Smiale
/* ------------------------------------------- Modules ------------------------------------------ */

const inquirer = require('inquirer')
const colors = require('colors/safe')
const emoji = require('node-emoji')
let play = require('./playerNames')
const ch = require('random-chalk')
const chalk = require('chalk')
const chalkPipe = require('chalk-pipe')
chalk.enable = true

/* ----------------------------------------- Start game  => playerNames----------------------------------------- */
function initializeGame() {
  console.clear()

  colors.setTheme({
    silly: ['rainbow', 'underline'],
    input: ['grey', 'bgRed'],
    verbose: ['cyan', 'italic'],
    prompt: ['brightMagenta', 'bgGreen'],
    info: ['green', 'bgBrightBlue'],
    data: ['bgBrightWhite', 'black'],
    help: ['blue', 'bgBrightYellow'],
    warn: ['yellow', 'inverse'], // Applies two styles at once
    debug: 'zebra',
    error: 'red bold', // Again, two styles
  })

  let e = emoji.random().emoji
  let f = emoji.random().emoji
  let g = emoji.random().emoji

  console.log(
    colors.random(`\n
        (oooooTooooo)  o8o                 (oooooTooooo)                          (oooooTooooo)              o8o
             )8(                                )8(                                    )8(                                      ${f}  |  ${e}  |  ${g}
             888      ooooo  .ooooo.            888       (oooo.    .ooooo.            888       .ooooo.    o88o   ooooo        -----------------
             888       888  d8(   Y8            888      P  )88b  d8(    Y8            888      d8(   )8b   |8b     888         ${f}  |  ${e}  |  ${g}
             888       888  88|                 888       .oP888  88|                  888      88|   |88   |88     888         -----------------
             888       888  88(   .o8           888     d8(   )8  88(   .o8            888      88(   )88   |88     888         ${f}  |  ${e}  |  ${g}
           (o888o)    o888o  Y8bod8P          (o888o)    Y8888op    Y8bod8P          (o888o)     Y8bod8P    |88    o888o
                                                                                                            |89
                                                                                                        999##/*
                                                                                                                                                       \n`),
  ),
    console.log('\n'),
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'game',
          message: 'What do you want to do?',
          choices: [
            {
              name: 'New game',
              value: 'new',
            },
            {
              name: 'Quit',
              value: 'quit',
            },
            {
              name: 'Play With Banner',
              value: 'banner',
            },
          ],
        },
      ])
      .then((answers) => {
        switch (answers.game) {
          case 'quit':
            quitGame()
            break
          case 'banner':
            initializeGame()
            break
          default:
            // play.playGame()
            play.playerNames()
        }
      })
}

//Start
initializeGame()
