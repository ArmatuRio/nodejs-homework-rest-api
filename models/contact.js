const { Schema, model } = require('mongoose')
const Joi = require('joi')
const mongoosePaginate = require('mongoose-paginate-v2')

const contactSchema = Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  }

}, { versionKey: false, timestamps: true })

const joiSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/[0-9]/).required(),
  favorite: Joi.boolean().valid(false)
})

const updateFavoriteJoiSchema = Joi.object({
  favorite: Joi.boolean().required()
})

contactSchema.plugin(mongoosePaginate)

const Contact = model('contact', contactSchema)

module.exports = {
  Contact,
  joiSchema,
  updateFavoriteJoiSchema
}
