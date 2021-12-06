const { Contact } = require('../../models')

const getAll = async (req, res, next) => {
  const { _id } = req.user
  const {
    page = 1,
    limit = 5,
    favorite = null
  } = req.query
  const ownerSearch = { owner: _id }

  if (favorite !== null) {
    ownerSearch.favorite = favorite
  }
  const result = await Contact.paginate(ownerSearch, { page, limit, populate: { path: 'owner', select: '_id email subscription' } })

  res.json({
    status: 'success',
    code: 200,
    data: {
      result: result.docs
    }
  })
}

module.exports = getAll
