const express = require('express')

const { validation, ctrlWrapper } = require('../../middlewares')
const { joiSchema, updateFavoriteJoiSchema } = require('../../models/contact')

const { contacts: ctrl } = require('../../controllers')

const router = express.Router()

router.get('/', ctrlWrapper(ctrl.getAll))

router.get('/:id', ctrlWrapper(ctrl.getById))

router.post('/', validation(joiSchema), ctrlWrapper(ctrl.add))

router.put('/:id', validation(joiSchema), ctrlWrapper(ctrl.updateById))

router.patch('/:id/favorite', validation(updateFavoriteJoiSchema), ctrlWrapper(ctrl.updateFavoriteContact))

router.delete('/:id', ctrlWrapper(ctrl.removeById))

module.exports = router
