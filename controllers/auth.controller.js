const register = (req, res) =>{
    res.send('Register User')
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