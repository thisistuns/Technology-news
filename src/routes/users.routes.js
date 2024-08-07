const express = require('express')
const routerUser = express.Router()

const { postCreateUsers } = require('../controllers/users.Controller')

routerUser.post('/users', postCreateUsers)

module.exports = routerUser
