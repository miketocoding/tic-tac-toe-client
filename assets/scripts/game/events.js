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
  const box = $(event.target)
  const gameOver = store.gameOver
  if ($(box).text() === '' && gameOver === false) {
    box.text(store.currentPlayer)
    const arrayData = store.game.cells
    const cellIndex = box.data('cell-index')
    arrayData[cellIndex] = store.currentPlayer
    api.makeMove(store.currentPlayer, cellIndex, gameOver)
      .then(ui.makeMoveSuccess)
      .catch(ui.makeMoveFailure)
  }
}

module.exports = {
  onNewGame,
  onMakeMove
}
