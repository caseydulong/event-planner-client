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

const onDeleteEvent = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteEvent(id)
    .then(function () {
      ui.deleteEventSuccess()
      firstIndex()
    })
    .catch(ui.errorMessage)
}

const eventHandlers = () => {
  $('#create-event-form').on('submit', onCreateEvent)
  $('#content').on('click', '#delete-event-button', onDeleteEvent)

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
  onDeleteEvent,
  firstIndex
}
