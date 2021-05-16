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
  box.text(currentPlayer)
  console.log(event.target, 'this is event.target')
  console.log(store.user.game, 'this is game data')
  // box.attr()
  const cellData = store.user.game.cells
  store.user.game.cells[0] = currentPlayer
  console.log(cellData[0], 'cell data at index 0')
  console.log(cellData, 'this is cell data')
  currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
  // make the box unclibkable after inital click
  box.off('click')
}

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
}
