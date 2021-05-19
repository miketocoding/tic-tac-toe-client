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

const newGameSuccess = function (res) {
  $('#messaging').text('New Game Created! You are player X')
  console.log(res, 'newGameSuccess response')
  $('#after-new-game').show()
  store.game = res.game
  console.log(store.game, 'The game data')
  // wipe the board if when 'New Game pressed'
  $('.box').text('')
  store.gameOver = false
  store.currentPlayer = 'X'
}

const newGameFailure = function (err) {
  console.error(err)
  $('#messaging').text('Error! New game not created.')
}

const makeMoveSuccess = function (res) {
  console.log('This is makeMoveSuccess response ', res)
  store.game = res.game
  const arrayData = store.game.cells

  // if (
  //   (arrayData[0] === arrayData[1] && arrayData[0] === arrayData[2] && arrayData[0] !== '') ||
  //   (arrayData[3] === arrayData[4] && arrayData[3] === arrayData[5] && arrayData[3] !== '') ||
  //   (arrayData[6] === arrayData[7] && arrayData[6] === arrayData[8] && arrayData[6] !== '') ||
  //   (arrayData[0] === arrayData[3] && arrayData[0] === arrayData[6] && arrayData[0] !== '') ||
  //   (arrayData[1] === arrayData[4] && arrayData[1] === arrayData[7] && arrayData[1] !== '') ||
  //   (arrayData[2] === arrayData[5] && arrayData[2] === arrayData[8] && arrayData[2] !== '') ||
  //   (arrayData[0] === arrayData[4] && arrayData[0] === arrayData[8] && arrayData[0] !== '') ||
  //   (arrayData[2] === arrayData[4] && arrayData[2] === arrayData[6] && arrayData[2] !== '')
  // ) {
  if (
    (arrayData[0] === 'X' && arrayData[1] === 'X' && arrayData[2] === 'X') ||
      (arrayData[3] === 'X' && arrayData[4] === 'X' && arrayData[5] === 'X') ||
      (arrayData[6] === 'X' && arrayData[7] === 'X' && arrayData[8] === 'X') ||
      (arrayData[0] === 'X' && arrayData[3] === 'X' && arrayData[6] === 'X') ||
      (arrayData[1] === 'X' && arrayData[4] === 'X' && arrayData[7] === 'X') ||
      (arrayData[2] === 'X' && arrayData[5] === 'X' && arrayData[8] === 'X') ||
      (arrayData[0] === 'X' && arrayData[4] === 'X' && arrayData[8] === 'X') ||
      (arrayData[2] === 'X' && arrayData[4] === 'X' && arrayData[6] === 'X')
  ) {
    store.gameOver = true
    console.log('Game status, is game over?', store.gameOver)
    // this is broken, you can't click after game is over and in new game
    // $('.box').off('click')
    // display who won
    $('#messaging').text('Game Over, Player X wins. That\'s you!')
    // else if for a draw
  } else if (
    (arrayData[0] === 'O' && arrayData[1] === 'O' && arrayData[2] === 'O') ||
    (arrayData[3] === 'O' && arrayData[4] === 'O' && arrayData[5] === 'O') ||
    (arrayData[6] === 'O' && arrayData[7] === 'O' && arrayData[8] === 'O') ||
    (arrayData[0] === 'O' && arrayData[3] === 'O' && arrayData[6] === 'O') ||
    (arrayData[1] === 'O' && arrayData[4] === 'O' && arrayData[7] === 'O') ||
    (arrayData[2] === 'O' && arrayData[5] === 'O' && arrayData[8] === 'O') ||
    (arrayData[0] === 'O' && arrayData[4] === 'O' && arrayData[8] === 'O') ||
    (arrayData[2] === 'O' && arrayData[4] === 'O' && arrayData[6] === 'O')
  ) {
    store.gameOver = true
    $('#messaging').text('Game Over, You lose! Player O wins. Try your skill again!')
  } else if (arrayData[0] !== '' && arrayData[1] !== '' && arrayData[2] !== '' && arrayData[3] !== '' && arrayData[4] !== '' && arrayData[5] !== '' && arrayData[6] !== '' && arrayData[7] !== '' && arrayData[8] !== '') {
    store.gameOver = true
    console.log('Game status, is game over?', store.gameOver)
    // $('.box').off('click')
    $('#messaging').text('Game Over, it\'s a draw')
  }
  store.currentPlayer = store.currentPlayer === 'O' ? 'X' : 'O'
}

const makeMoveFailure = function (err) {
  console.error(err)
}

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
}
