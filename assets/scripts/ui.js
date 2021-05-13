'use strict'

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
  $('#messaging').text('Welcome, ' + res.user.email)
}

const signInFailure = function (err) {
  console.error(err)
  $('#messaging').text('Failed to sign in')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
