const express=require('express')

const router=express.Router()

const {createtodo}=require('../controller/createtodo')
const {gettodo}=require('../controller/gettodo')
const {gettodoid}=require('../controller/gettotdobyid')
const {updatetodo}=require('../controller/updatetodo')
const {deletetodo}=require('../controller/deletetodo')

router.post('/createtodo',createtodo)
router.get('/gettodo',gettodo)
router.get('/gettodo/:id',gettodoid)
router.put('/updatetodo/:id',updatetodo)
router.delete('/deletetodo/:id',deletetodo)

module.exports=router
