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

const togglePlayerPos = function () {
  console.log(togglePlayerPos)
  return $.ajax({})
}

const cellMakeMove = function (gameId, gameData, dataIndex) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + gameId,
    gameData: {
      game: {
        cell: {
          index: dataIndex,
          value: './../public/red-x.png'
        }
      }
    },
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  newGame,
  togglePlayerPos,
  cellMakeMove
}
