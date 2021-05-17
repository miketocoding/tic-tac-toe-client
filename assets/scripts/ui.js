'use strict'

const store = require('./store')

const signUpSuccess = function (res) {
  $('#sign-up').trigger('reset')
  console.log(res)
  $('#messaging').text('Welcome, ' + res.user.email)
}

const signUpFailure = function (err) {
  console.log(err)
  $('#messaging').text('Failed to sign up')
}

const signInSuccess = function (res) {
  $('#sign-in').trigger('reset')
  console.log(res, 'signInSuccess response')
  store.user = res.user
  $('#messaging').text(res.user.email + ', has signed in successfully!')
  $('#after-sign-in').show()
  $('#before-sign-in').hide()
  $('#after-new-game').hide()
}

const signInFailure = function (err) {
  console.error(err)
  $('#messaging').text('Failed to sign in')
}

const signOutSuccess = function () {
  store.user = null
  $('#messaging').text('Signed out successfully. Come play again!')
  // Display the "before sign in" elements
  $('#before-sign-in').show()
  // Hide the "after sign in" elements
  $('#after-sign-in').hide()
  // Clear all the forms!
  $('form').trigger('reset')
}

const signOutFailure = function () {
  $('#messaging').text('Sign out failed :(')
}

let currentPlayer = 'X'

const newGameSuccess = function (res) {
  $('#messaging').text(`New Game Created! You are player ${currentPlayer}`)
  console.log(res, 'newGameSuccess response')
  $('#after-new-game').show()
  store.game = res.game
  console.log(store.game, 'The game data')
  // wipe the board if when 'New Game pressed'
  $('.box').text('')
  store.game._id = res.game._id
  const gameId = store.game._id
  console.log(store.game._id, 'The game ID')
  console.log(res.game._id, 'Also the game ID?')
  console.log(gameId, 'This is store.game._id in a variable')
}

const newGameFailure = function (err) {
  console.error(err)
  $('#messaging').text('Error! New game not created.')
}

const makeMoveSuccess = function (res) {
  console.log('click')
  // const box = $(event.target)
  // if ($(box).text() === '') {
  //   box.text(currentPlayer)
  //   console.log(event.target, 'this is event.target')
  //   console.log(store.game, 'this is game data')
  //   const arrayData = store.game.cells
  //   console.log('cell value data', $(box).text())
  //   const cellValue = $(box).text()
  //   console.log(cellValue, 'this is the cell value through a variable')
  //   console.log('cell string data', $('.box').text())
  //   const cellIndex = box.data('cell-index')
  //   console.log('cell index position', cellIndex)
  //   arrayData[cellIndex] = currentPlayer
  //   store.game.cells[cellIndex] = cellValue
  //
  //   console.log(arrayData, 'this is array data')
  //   currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
  // } else {
  //   box.off('click', makeMoveSuccess)
  // }
}

const makeMoveFailure = function (err) {
  console.error(err)
}
// const togglePlayerPosSuccess = function (res) {
//   console.log(store.user.playerPos)
//   if (store.user.playerPos === 'X') {
//     store.user.playerPos = 'O'
//   } else {
//     store.user.playerPos = 'X'
//   }
//   console.log(store.user.playerPos)
//   return store.user.playerPos
// }

// const playerPos = function () {
// $('#messaging').text(`You are player ${playerPos()}`)
//   console.log(store.user.playerPos)
//   return (store.user.playerPos === 0 ? 'X' : 'O')

// if (store.user.playerPos === 0) {
//   return 'X'
// } else {
//   return 'Y'
// }
// }

// const togglePlayerPosFailure = function () {}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure,
  makeMoveSuccess,
  makeMoveFailure
  // togglePlayerPosSuccess,
  // togglePlayerPosFailure
  // playerPos
}
