'use strict'

const store = require('./../store')

const newGameSuccess = function (res) {
  $('#messaging').text('New Game Created! You are player X')
  $('#after-new-game').show()
  store.game = res.game
  // wipe the board when 'New Game pressed'
  $('.box').text('')
  store.gameOver = false
  store.currentPlayer = 'X'
}

const newGameFailure = function () {
  $('#messaging').text('Error! New game not created.')
}

const makeMoveSuccess = function (res) {
  store.game = res.game
  const arrayData = store.game.cells

  if (
    (arrayData[0] === arrayData[1] && arrayData[0] === arrayData[2] && arrayData[0] !== '') ||
    (arrayData[3] === arrayData[4] && arrayData[3] === arrayData[5] && arrayData[3] !== '') ||
    (arrayData[6] === arrayData[7] && arrayData[6] === arrayData[8] && arrayData[6] !== '') ||
    (arrayData[0] === arrayData[3] && arrayData[0] === arrayData[6] && arrayData[0] !== '') ||
    (arrayData[1] === arrayData[4] && arrayData[1] === arrayData[7] && arrayData[1] !== '') ||
    (arrayData[2] === arrayData[5] && arrayData[2] === arrayData[8] && arrayData[2] !== '') ||
    (arrayData[0] === arrayData[4] && arrayData[0] === arrayData[8] && arrayData[0] !== '') ||
    (arrayData[2] === arrayData[4] && arrayData[2] === arrayData[6] && arrayData[2] !== '')
  ) {
    store.gameOver = true
    $('#messaging').text(`Game Over, player ${store.currentPlayer} wins! Try your skills again!`)
  } else if (arrayData.every(element => element !== '')) {
    store.gameOver = true
    $('#messaging').text('Game Over, it\'s a draw')
  }
  store.currentPlayer = store.currentPlayer === 'O' ? 'X' : 'O'
}

const makeMoveFailure = function () {
  $('#messaging').text('You failed to correctly make your move')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  makeMoveSuccess,
  makeMoveFailure
}
