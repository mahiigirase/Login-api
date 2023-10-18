const route = require('express').Router()

const {getStudent,postStudent,updateStudent,deleteStudent,} = require('../Controller/studentController')
const auth = require('../Middleware/auth')

route.get('/',getStudent)

route.post('/',postStudent)

route.put('/:id',updateStudent)

route.delete('/:id',deleteStudent)

module.exports = route