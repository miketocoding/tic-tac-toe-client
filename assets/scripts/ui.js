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
  $('#messaging').text(`New Game Created! You are player ${store.user.playerPos}`)
  console.log(res)
  $('#after-new-game').show()
  store.user.gameData = res.gameData
  console.log(store.user.gameData)
  store.user.playerPos = 0
  console.log(store.user.playerPos)
  // console.log(playerPos())
  // player starting position will be 0 which is 'X' and 1 which will be 'O'
}

const newGameFailure = function (err) {
  console.error(err)
  $('#messaging').text('Error! New game not created.')
}

const togglePlayerPosSuccess = function (res) {
  console.log(store.user.playerPos)
  if (store.user.playerPos === 0) {
    store.user.playerPos++
  } else {
    store.user.playerPos--
  }
  console.log(store.user.playerPos)
  return store.user.playerPos
}

const playerPos = function () {
  $('#messaging').text(`You are player ${playerPos()}`)
  console.log(store.user.playerPos)
  return (store.user.playerPos === 0 ? 'X' : 'Y')
  // if (store.user.playerPos === 0) {
  //   return 'X'
  // } else {
  //   return 'Y'
  // }
}

const togglePlayerPosFailure = function () {}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure,
  togglePlayerPosSuccess,
  togglePlayerPosFailure,
  playerPos
}
