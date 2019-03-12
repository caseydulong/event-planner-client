'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignIn = event => {
  event.preventDefault()

  const formData = getFormFields(event.target)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.errorMessage)
}

const onSignUp = event => {
  event.preventDefault()

  const formData = getFormFields(event.target)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.errorMessage)
}

const onSignOut = event => {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.errorMessage)
}

const onChangePassword = event => {
  event.preventDefault()

  const formData = getFormFields(event.target)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordError)
}

const onSignInToggle = () => ui.signInToggle()
const onSignUpToggle = () => ui.signUpToggle()

const eventHandlers = () => {
  $('#sign-in-form').on('submit', onSignIn)
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-out-button').on('click', onSignOut)
  $('#change-password-form').on('submit', onChangePassword)
  $('.sign-in-toggle').on('click', onSignInToggle)
  $('.sign-up-toggle').on('click', onSignUpToggle)
}

module.exports = {
  eventHandlers
}
