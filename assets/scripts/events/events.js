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

const onUpdateEvent = event => {
  event.preventDefault()

  const id = $(event.target).data('id')
  const formData = getFormFields(event.target)

  api.updateEvent(id, formData)
    .then(function () {
      ui.updateEventSuccess(id)
      firstIndex()
    })
    .catch(ui.errorMessage)
}

const eventHandlers = () => {
  $('#create-event-form').on('submit', onCreateEvent)
  $('#content').on('click', '.delete-event-button', onDeleteEvent)
  $('#content').on('submit', '.update-event-form', onUpdateEvent)
}

const firstIndex = () => {
  api.index()
    .then(ui.indexSuccess)
    .catch(ui.errorMessage)
}

module.exports = {
  eventHandlers,
  onDeleteEvent,
  onUpdateEvent,
  firstIndex
}
