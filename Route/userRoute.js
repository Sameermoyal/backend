const express= require('express')
const router =express.Router()
const userController = require('../Controller/userController')

router.post('/save',userController.createUser)
router.get('/',userController.getAllUser)

module.exports =router;

