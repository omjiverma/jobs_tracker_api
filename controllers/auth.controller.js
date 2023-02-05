const User = require('../models/user.model')

const register = async(req, res) =>{
    try {
        const user = await User.create(req.body)
        res.status(201).json({user})
    } catch (error) {
        res.status(500).json({msg: "something went wrong"})
    }
}

const login = (req, res) =>{
    res.send('login User')
}

const updateUser = (req, res) =>{
    res.send('Update User')
}

module.exports = {
    register,
    login,
    updateUser
}