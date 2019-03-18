'use strict'

// Event card handlebars template
const eventCardTemplate = require('../templates/event-card.handlebars')

const indexSuccess = data => {
  clearEvents()

  // Create event cards with handlebars
  const eventCardsHtml = eventCardTemplate({ events: data.events })
  $('#content').append(eventCardsHtml)
}

const createEventSuccess = data => {
  userFeedback('Event created')
  $('#new-event-modal').modal('hide')
  $('#create-event-form').trigger('reset')
}

const deleteEventSuccess = () => {
  userFeedback('Event deleted')
}

const updateEventSuccess = id => {
  userFeedback('Event updated')
  $(`#update-event-modal-${id}`).modal('hide')
  $('.modal-backdrop').hide()
  $('body').removeClass('modal-open')
  $(`#update-event-form-${id}`).trigger('reset')
}

const errorMessage = () => {
  userFeedback('Something went wrong')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const userFeedback = message => {
  $('#user-feedback').text(message)
  $('#user-feedback').show()
  setTimeout(() => $('#user-feedback').fadeOut(500), 2500)
}

const clearEvents = () => {
  $('#content').empty()
}

module.exports = {
  indexSuccess,
  createEventSuccess,
  deleteEventSuccess,
  updateEventSuccess,
  errorMessage
}
