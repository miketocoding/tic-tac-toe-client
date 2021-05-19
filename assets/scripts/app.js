'use strict'
const tttEvents = require('./events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', tttEvents.onSignUp)
  $('#sign-in').on('submit', tttEvents.onSignIn)
  $('#sign-out').on('click', tttEvents.onSignOut)
  $('#new-game').on('click', tttEvents.onNewGame)
  // $('#after-sign-in').hide()
  // $('#cell1').on('click', tttEvents.onAddX)

  $('.box').on('click', tttEvents.onMakeMove)
  // $('.box').on('click', tttEvents.dataAttr, tttEvents.onMakeMove)

  // $(event.target).on('click', tttEvents.onMakeMove)
})
