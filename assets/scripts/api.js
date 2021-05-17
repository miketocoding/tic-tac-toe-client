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

// let currentPlayer = 'X'
// const makeMove = function () {
//   console.log('click')
//   const box = $(event.target)
//   if ($(box).text() === '') {
//     box.text(currentPlayer)
//     console.log(event.target, 'this is event.target')
//     console.log(store.game, 'this is game data')
//     const arrayData = store.game.cells
//     console.log('cell value data', $(box).text())
//     const cellValue = $(box).text()
//     console.log(cellValue, 'this is the cell value through a variable')
//     console.log('cell string data', $('.box').text())
//     const cellIndex = box.data('cell-index')
//     console.log('cell index position', cellIndex)
//     arrayData[cellIndex] = currentPlayer
//
//     console.log(arrayData, 'this is array data')
//     currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
//   } else {
//     box.off('click', makeMove)
//   }
// }

const makeMove = function (cellValue, cellIndex) {
  // console.log('this is the gameId: ', gameId)
  console.log('this is the cellValue: ', cellValue)
  console.log('this is the cellIndex: ', cellIndex)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    gameData: {
      game: {
        cell: {
          index: cellValue,
          value: cellIndex
        },
        over: false
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  newGame,
  makeMove
}
