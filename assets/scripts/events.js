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

// const onTogglePlayerPos = function () {
//   event.preventDefault()
//   api.togglePlayerPos()
//     .then(ui.togglePlayerPosSuccess)
//     .catch(ui.togglePlayerPosFailure)
// }
let currentPlayer = 'X'

const onMakeMove = function (event) {
  event.preventDefault()
  console.log('click')
  const box = $(event.target)
  if ($(box).text() === '') {
    box.text(currentPlayer)
    console.log(event.target, 'this is event.target')
    console.log(store.game, 'this is game data')
    const arrayData = store.game.cells
    // const cellValue = store.game.cells
    console.log('cell value data', $(box).text())
    var cellValue = $(box).text()
    console.log(cellValue, 'this is the cell value through a variable')
    console.log('cell string data', $('.box').text())
    var cellIndex = box.data('cell-index')
    console.log('cell index position', cellIndex)
    arrayData[cellIndex] = currentPlayer

    console.log(arrayData, 'this is array data')
    currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
  } else {
    box.off('click', onMakeMove)
  }
  api.makeMove(cellValue, cellIndex)
    .then(ui.makeMoveSuccess)
  // .catch(ui.makeMoveFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  // onTogglePlayerPos,
  onMakeMove
}
