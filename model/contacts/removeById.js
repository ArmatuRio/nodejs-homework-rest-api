const getAll = require('./getAll')
const updateContacts = require('./updateContacts')

const removeById = async(id) => {
  const contacts = await getAll()
  const idx = contacts.findIndex(item => item.id === id)
  if (idx === -1) {
    return null
  }
  const newProducts = contacts.filter((_, index) => index !== idx)
  await updateContacts(newProducts)
  return contacts[idx]
}

module.exports = removeById
