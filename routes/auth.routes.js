const express = require('express');
const authRouter = express.Router()

const {register, login, updateUser} = require('../controllers/auth.controller')

authRouter.route('/register').post(register)
authRouter.route('/login').post(login)
authRouter.route('/updateUser').patch(updateUser)

module.exports = authRouter