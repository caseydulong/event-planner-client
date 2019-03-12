'use strict'

const config = require('../config.js')
const store = require('../store.js')

const index = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/events',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createEvent = () => {
  return $.ajax({
    url: config.apiUrl + '/events',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteEvent = id => {
  return $.ajax({
    url: config.apiUrl + `/events/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  index,
  createEvent,
  deleteEvent
}
