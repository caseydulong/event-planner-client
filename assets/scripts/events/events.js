'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
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

  const formData = getFormFields(event.target)
  console.log(formData)

  api.createEvent(formData)
    .then(function () {
      ui.createEventSuccess()
      firstIndex()
    })
    .catch(ui.errorMessage)
}

const eventHandlers = () => {
  $('#create-event-form').on('submit', onCreateEvent)

  // TEMPORARY BUTTON
  $('#show-events-button').on('click', onIndex)
}

const firstIndex = () => {
  api.index()
    .then(ui.indexSuccess)
    .catch(ui.errorMessage)
}

module.exports = {
  eventHandlers,
  firstIndex
}
