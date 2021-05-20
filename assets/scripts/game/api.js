'use strict'
const config = require('./../config.js')
const store = require('./../store.js')

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

const makeMove = function (cellValue, cellIndex, gameOver) {
  console.log('this is the cellValue: ', cellValue)
  console.log('this is the cellIndex: ', cellIndex)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: {
      game: {
        cell: {
          index: cellIndex,
          value: cellValue
        },
        over: gameOver
      }
    }
  })
}

module.exports = {
  newGame,
  makeMove
}
