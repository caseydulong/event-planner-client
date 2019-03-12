'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onIndex = event => {
  event.preventDefault()
  api.index()
    .then(ui.indexSuccess)
    .catch(ui.errorMessage)
}

const onCreateEvent = event => {
  event.preventDefault()
  api.createEvent()
    .then(ui.createEventSuccess)
    .catch(ui.errorMessage)
}

const eventHandlers = () => {
  $('#create-events-button').on('click', onCreateEvent)
  $('#show-events-button').on('click', onIndex)
}

module.exports = {
  eventHandlers
}
