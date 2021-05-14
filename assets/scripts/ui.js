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
  console.log(res)
  store.user = res.user
  $('#messaging').text(res.user.email + ' has signed in successfully!')
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
  console.log(res)
  $('#after-new-game').show()
  store.user.gameData = res.gameData
  console.log(store.user.gameData)
}

const newGameFailure = function (err) {
  console.error(err)
  $('#messaging').text('Error! New game not created.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure
}
