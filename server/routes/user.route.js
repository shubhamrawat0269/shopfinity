const express = require('express')
const router = express.Router()
const { userController } = require('../controllers')

router.post('/sign-in', userController.loginUser)
router.post('/sign-up', userController.registerUser)
// router.post('/logout', userController.logoutUser)

module.exports = router
