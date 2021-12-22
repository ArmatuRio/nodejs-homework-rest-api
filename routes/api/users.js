const express = require('express')

const { auth, validation, ctrlWrapper } = require('../../middlewares')
const { users: ctrl } = require('../../controllers')

const { joiSchema, subscriptionJoiSchema } = require('../../models')
const upload = require('../../middlewares/upload')
const userValidationMiddleware = validation(joiSchema)
const router = express.Router()

router.post('/signup', userValidationMiddleware, ctrlWrapper(ctrl.signUp))
router.post('/login', userValidationMiddleware, ctrlWrapper(ctrl.login))
router.get('/current', auth, ctrlWrapper(ctrl.getCurrent))
router.get('/logout', auth, ctrlWrapper(ctrl.logOut))
router.patch('/:id', auth, validation(subscriptionJoiSchema), ctrlWrapper(ctrl.updateSubscription))
router.patch('/avatars', auth, upload.single('avatar'), ctrlWrapper(ctrl.updateAvatar))
router.get('/verify/:verificationToken', ctrlWrapper(ctrl.verifyEmail))
router.post('/verify', ctrlWrapper(ctrl.resendEmail))
module.exports = router
