const signUp = require('./signUp')
const login = require('./login')
const getCurrent = require('./getCurrent')
const logOut = require('./logOut')
const updateSubscription = require('./updateSubscription')
const updateAvatar = require('./updateAvatar')
const verifyEmail = require('./verifyEmail')
const resendEmail = require('./resendEmail')

module.exports = {
  signUp,
  login,
  getCurrent,
  logOut,
  updateSubscription,
  updateAvatar,
  verifyEmail,
  resendEmail
}
