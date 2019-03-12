'use strict'

const eventCardTemplate = require('../templates/event-card.handlebars')

const indexSuccess = (data) => {
  console.log(data)
  const eventCardsHtml = eventCardTemplate({ events: data.events })
  $('.content').append(eventCardsHtml)
}

const clearEvents = () => {
  $('.content').empty()
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

module.exports = {
  errorMessage,
  indexSuccess,
  clearEvents
}
