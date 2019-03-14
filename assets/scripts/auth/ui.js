'use strict'

const store = require('../store.js')
const events = require('../events/events.js')

const errorMessage = () => {
  userFeedback('Something went wrong')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const signInSuccess = responseData => {
  store.user = responseData.user
  $('#sign-in-form').trigger('reset')
  userFeedback('Sign in successful')
  $('.nav-buttons').fadeIn(500)
  $('#auth-forms').fadeOut(500)
  events.firstIndex()
}

const signUpSuccess = () => {
  userFeedback('Sign up successful')
  $('#sign-up-form').trigger('reset')
  $('#sign-up-form').hide()
  $('#sign-in-form').fadeIn(500)
}

const signOutSuccess = () => {
  $('#content').empty()
  userFeedback('Sign out successful')
  store.user = null
  $('.nav-buttons').fadeOut(500)
  $('#auth-forms').fadeIn(500)
}

const changePasswordSuccess = () => {
  userFeedback('Password successfully changed')
  $('#change-password-form').trigger('reset')
  $('#change-password-modal').modal('hide')
}

const signInToggle = () => {
  $('#sign-up-form').hide()
  $('#sign-in-form').fadeIn(500)
}

const signUpToggle = () => {
  $('#sign-in-form').hide()
  $('#sign-up-form').fadeIn(500)
}

const changePasswordError = () => {
  $('#change-pw-feedback').text('Something went wrong')
  $('#change-pw-feedback').show()
  setTimeout(() => $('#change-pw-feedback').fadeOut(500), 5000)
  $('#change-password-form').trigger('reset')
}

const userFeedback = message => {
  $('#user-feedback').text(message)
  $('#user-feedback').show()
  setTimeout(() => $('#user-feedback').fadeOut(500), 2500)
}

module.exports = {
  errorMessage,
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordError,
  signInToggle,
  signUpToggle
}
