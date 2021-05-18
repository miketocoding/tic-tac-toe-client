'use strict'

const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const onSignUp = function (event) {
  event.preventDefault()
  console.log(event.target, 'The target of the submit')
  const data = getFormFields(event.target)
  console.log(data, 'The form data')
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log(event.target, 'The target of the submit')
  const data = getFormFields(event.target)
  console.log(data, 'The form data')
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}
let currentPlayer = 'X'

const onMakeMove = function (event) {
  event.preventDefault()
  console.log('click')
  const box = $(event.target)
  let gameOver = store.game.over
  console.log('gameOver status, is game over? ', gameOver)
  if ($(box).text() === '' && gameOver === false) {
    console.log('IS GAME OVER???', gameOver)
    box.text(currentPlayer)
    console.log(event.target, 'this is event.target')
    console.log(store.game, 'this is game data')
    const arrayData = store.game.cells
    console.log('cell value data', $(box).text())
    var cellValue = $(box).text()
    console.log(cellValue, 'this is the cell value through a variable')
    console.log('cell string data', $('.box').text())
    var cellIndex = box.data('cell-index')
    console.log('cell index position', cellIndex)
    arrayData[cellIndex] = currentPlayer
    store.game.cells[cellIndex] = cellValue

    console.log(arrayData, 'this is array data')
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
      gameOver = true
      console.log('Game status, is game over?', gameOver)
      // this is broken, you can't click after game is over and in new game
      // $('.box').off('click')
      // display who won
      $('#messaging').text('Game Over, we have a winner')
      // else if for a draw
    } else if (arrayData[0] !== '' && arrayData[1] !== '' && arrayData[2] !== '' && arrayData[3] !== '' && arrayData[4] !== '' && arrayData[5] !== '' && arrayData[6] !== '' && arrayData[7] !== '' && arrayData[8] !== '') {
      gameOver = true
      console.log('Game status, is game over?', gameOver)
      // $('.box').off('click')
      $('#messaging').text('Game Over, it\'s a draw')
    }

    currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
  } else {
    // box.off('click', onMakeMove)
    // originally had box.off() however making it it else nothing allows me
    // to click on the cell when i press new game
  }
  api.makeMove(cellValue, cellIndex, gameOver)
    .then(ui.makeMoveSuccess)
  // .catch(ui.makeMoveFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  onMakeMove
}
