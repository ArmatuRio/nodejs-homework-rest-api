// const contactsOperations = require('../../models/contacts')
// const Joi = require('joi')
const { Contact } = require('../../models')

// const contactSchema = Joi.object({
//   name: Joi.string().min(1).required(),
//   email: Joi.string().min(1).required(),
//   phone: Joi.number().min(1).required(),
// })

const add = async (req, res,) => {
  // const { error } = contactSchema.validate(req.body)
  // if (error) {
  //   error.status = 400
  //   throw error
  // }
  const result = await Contact.create(req.body)
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result
    }
  })
}

module.exports = add
