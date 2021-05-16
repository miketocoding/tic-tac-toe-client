'use strict'

const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

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

const onMakeMove = function (event) {
  event.preventDefault()
  api.makeMove()
  // .then(ui.makeMoveSuccess)
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
