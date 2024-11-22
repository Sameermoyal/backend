const express= require('express')
const router =express.Router()
const userController = require('../Controller/userController')

router.post('/post',userController.createUser)
router.post('/login',userController.userLogin)

router.get('/',userController.getAllUser)

router.get('/single',userController.getSingleUser)
router.patch('/update',userController.updateUser)
router.delete('/delete/:id',userController.deleteUser)

module.exports =router;

