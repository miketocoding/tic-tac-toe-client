'use strict'
const config = require('./../config.js')
const store = require('./../store.js')

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

// const newGame = function () {
//   return $.ajax({
//     method: 'POST',
//     url: config.apiUrl + '/games',
//     headers: {
//       Authorization: `Bearer ${store.user.token}`,
//       body: '{}'
//     }
//   })
// }
//
// const makeMove = function (cellValue, cellIndex, gameOver) {
//   console.log('this is the cellValue: ', cellValue)
//   console.log('this is the cellIndex: ', cellIndex)
//   return $.ajax({
//     method: 'PATCH',
//     url: config.apiUrl + '/games/' + store.game._id,
//     headers: {
//       Authorization: `Bearer ${store.user.token}`
//     },
//     data: {
//       game: {
//         cell: {
//           index: cellIndex,
//           value: cellValue
//         },
//         over: gameOver
//       }
//     }
//   })
// }

module.exports = {
  signUp,
  signIn,
  signOut
  // newGame,
  // makeMove
}
