const { Conflict } = require('http-errors')

const { User } = require('../../models')

const signUp = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict('Email in use')
  }
  const newUser = new User({ email })
  newUser.setPassword(password)
  newUser.save()
  res.status(201).json({
    status: 'created',
    code: 201,
    data: {
      user: {
        email,
        subscription: newUser.subscription
      }
    }
  })
}

module.exports = signUp
