const { Conflict } = require('http-errors')
const gravatar = require('gravatar')

const { v4 } = require('uuid')

const { User } = require('../../models')
const { sendEmail } = require('../../emailTemplate')

const signUp = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict('Email in use')
  }
  const avatarURL = gravatar.url(email)
  const verificationToken = v4()
  const newUser = new User({ email, avatarURL, verificationToken })
  newUser.setPassword(password)
  await newUser.save()
  const letter = {
    to: email,
    subject: 'Email verification',
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Подтвердить email</a>`
  }
  await sendEmail(letter)
  res.status(201).json({
    status: 'created',
    code: 201,
    data: {
      user: {
        email,
        avatarURL,
        verificationToken
        // subscription
      }
    }
  })
}

module.exports = signUp
