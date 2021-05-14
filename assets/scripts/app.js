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
  // $('#cell0').on('click', function () {
  //   $('<img src="./../../public/red-x.png">').appendTo('#cell0')
  // })
  // $('#cell1').on('click', function () {
  //   $('<img src="./../../public/red-x.png">').appendTo('#cell1')
  // })
  // $('#cell2').on('click', function () {
  //   $('<img src="./../../public/red-x.png">').appendTo('#cell2')
  // })
  // $('#cell3').on('click', function () {
  //   $('<img src="./../../public/red-x.png">').appendTo('#cell3')
  // })
  // $('#cell4').on('click', function () {
  //   $('<img src="./../../public/red-x.png">').appendTo('#cell4')
  // })
  // $('#cell5').on('click', function () {
  //   $('<img src="./../../public/red-x.png">').appendTo('#cell5')
  // })
  // $('#cell6').on('click', function () {
  //   $('<img src="./../../public/red-x.png">').appendTo('#cell6')
  // })
  // $('#cell7').on('click', function () {
  //   $('<img src="./../../public/red-x.png">').appendTo('#cell7')
  // })
  // $('#cell8').on('click', function () {
  //   $('<img src="./../../public/red-x.png">').appendTo('#cell8')
  // })
})
