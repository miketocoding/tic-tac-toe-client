'use strict'
const config = require('./config.js')
const store = require('./store.js')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    data: data,
    url: config.apiUrl + '/sign-up'
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    data,
    url: config.apiUrl + '/sign-in'
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const newGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Bearer ${store.user.token}`,
      body: '{}'
    }
  })
}

// const togglePlayerPos = function () {
//   console.log(togglePlayerPos)
//   return $.ajax({})
// }

// troubleshooting to see if function works for switching x and o
let currentPlayer = 'X'
const makeMove = function () {
  console.log('click')
  const box = $(event.target)
  if ($(box).text() === '') {
    box.text(currentPlayer)
    console.log(event.target, 'this is event.target')
    console.log(store.user.game, 'this is game data')
    const arrayData = store.user.game.cells
    console.log('cell value data', $(box).text())
    console.log('cell string data', $('.box').text())
    const cellValue = box.data('cell-index')
    console.log('cell index position', cellValue)
    arrayData[cellValue] = currentPlayer

    console.log(arrayData, 'this is array data')
    currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
  } else {
    box.off('click', makeMove)
  }
}

// const dataAttr = { 'cell-index': currentPlayer }

// const makeMove = function (gameId, gameData, dataIndex) {
//   return $.ajax({
//     method: 'PATCH',
//     url: config.apiUrl + '/games/' + gameId,
//     headers: {
//       Authorization: `Bearer ${store.user.token}`
//     },
//     gameData: {
//       game: {
//         cell: {
//           index: dataIndex,
//           value: './../public/red-x.png'
//         }
//       }
//     }
//   })
// }

module.exports = {
  signUp,
  signIn,
  signOut,
  newGame,
  // togglePlayerPos,
  makeMove
  // dataAttr
}
