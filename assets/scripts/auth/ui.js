'use strict'

const store = require('../store.js')
const events = require('../events/events.js')

const errorMessage = () => {
  userFeedback('Something went wrong')
  clearForms()
}

const clearForms = () => {
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const signInSuccess = responseData => {
  store.user = responseData.user
  clearForms()
  $('.nav-buttons').fadeIn(500)
  $('#auth-forms').fadeOut(500)
  events.firstIndex()
}

const signUpSuccess = () => {
  clearForms()
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
  clearForms()
  $('#change-password-modal').modal('hide')
}

const signInToggle = () => {
  $('#sign-up-form').hide()
  $('#sign-in-form').fadeIn(500)
  clearForms()
}

const signUpToggle = () => {
  $('#sign-in-form').hide()
  $('#sign-up-form').fadeIn(500)
  clearForms()
}

const changePasswordError = () => {
  $('#change-pw-feedback').text('Something went wrong')
  $('#change-pw-feedback').show()
  setTimeout(() => $('#change-pw-feedback').fadeOut(500), 5000)
  clearForms()
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
