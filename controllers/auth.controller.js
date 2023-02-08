const User = require("../models/user.model");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors/custom.errors");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const userAlreadyExists = await User.findOne({ email });
  if(userAlreadyExists) {
    throw new BadRequestError("Email Already in use");
  }
  const user = await User.create({ name, email, password });
  const token = user.createJWT()
  res.status(StatusCodes.CREATED).json({ user, token });
};



const login = async(req, res) => {
  const {email, password} = req.body
  if(!email || !password){
    throw new BadRequestError("Please provide email and password")
  }
  const user = await User.findOne({email})

  if(!user){
    throw new UnauthenticatedError("Invalid Credentials")
  }
  const isPasswordMatched = await user.comparePassword(password)
  if(!isPasswordMatched){
    throw new UnauthenticatedError("Invalid Password")
  }
  const token = user.createJWT()
  res.status(StatusCodes.OK).json({ user: {name: user.name}, token });
};



const updateUser = (req, res) => {
  res.send("Update User");
};

module.exports = {
  register,
  login,
  updateUser,
};
