'use strict'
const tttUserEvents = require('./user/events.js')
const tttGameEvents = require('./game/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', tttUserEvents.onSignUp)
  $('#sign-in').on('submit', tttUserEvents.onSignIn)
  $('#sign-out').on('click', tttUserEvents.onSignOut)
  $('#new-game').on('click', tttGameEvents.onNewGame)
  $('.box').on('click', tttGameEvents.onMakeMove)
})
