'use strict'

const store = require('./../store')

const signUpSuccess = function (res) {
  $('#messaging').text('Welcome, ' + res.user.email)
}

const signUpFailure = function () {
  $('#messaging').text('Failed to sign up')
}

const signInSuccess = function (res) {
  $('#sign-in').trigger('reset')
  store.user = res.user
  $('#messaging').text(res.user.email + ', has signed in successfully!')
  $('#after-sign-in').show()
  $('#before-sign-in').hide()
  $('#after-new-game').hide()
}

const signInFailure = function () {
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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
