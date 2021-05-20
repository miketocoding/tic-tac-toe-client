'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onMakeMove = function (event) {
  event.preventDefault()
  console.log('click')
  const box = $(event.target)
  const gameOver = store.gameOver
  console.log('gameOver status, is game over? ', gameOver)
  if ($(box).text() === '' && gameOver === false) {
    console.log('IS GAME OVER???', gameOver)
    box.text(store.currentPlayer)
    console.log(event.target, 'this is event.target')
    console.log(store.game, 'this is game data')
    const arrayData = store.game.cells
    const cellIndex = box.data('cell-index')
    console.log('cell index position', cellIndex)
    // pick one
    arrayData[cellIndex] = store.currentPlayer

    console.log(arrayData, 'this is array data')

    api.makeMove(store.currentPlayer, cellIndex, gameOver)
      .then(ui.makeMoveSuccess)
      .catch(ui.makeMoveFailure)
  }
}

module.exports = {
  onNewGame,
  onMakeMove
}
