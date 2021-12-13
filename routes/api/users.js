const express = require('express')

const { auth, validation, ctrlWrapper } = require('../../middlewares')
const { users: ctrl } = require('../../controllers')

const { joiSchema, subscriptionJoiSchema } = require('../../models')
const upload = require('../../middlewares/upload')
const router = express.Router()

router.post('/signup', validation(joiSchema), ctrlWrapper(ctrl.signUp))
router.post('/login', validation(joiSchema), ctrlWrapper(ctrl.login))
router.get('/current', auth, ctrlWrapper(ctrl.getCurrent))
router.get('/logout', auth, ctrlWrapper(ctrl.logOut))
router.patch('/:id', auth, validation(subscriptionJoiSchema), ctrlWrapper(ctrl.updateSubscription))
router.patch('/avatars', auth, upload.single('avatar'), ctrlWrapper(ctrl.updateAvatar))
module.exports = router
