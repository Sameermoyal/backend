const express= require('express')
const router =express.Router()
const userController = require('../Controller/userController')

router.post('/post',userController.createUser)
router.get('/',userController.getAllUser)
router.patch('/update',userController.updateUser)
router.delete('/delete/:id',userController.deleteUser)

module.exports =router;

