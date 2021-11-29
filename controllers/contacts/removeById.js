// const contactsOperations = require('../../models/contacts')
const { Contact } = require('../../models')

const { NotFound } = require('http-errors')

const removeById = async (req, res) => {
  const { id } = req.params
  const result = await Contact.findByIdAndRemove(id)
  if (!result) {
    throw new NotFound(`Product width id=${id} not found`)
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'product delete',
    data: {
      result
    }
  })
}

module.exports = removeById
