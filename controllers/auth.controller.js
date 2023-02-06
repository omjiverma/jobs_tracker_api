const User = require("../models/user.model");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require('../errors/custom.errors')

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const user = await User.create({ name, email, password });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = (req, res) => {
  res.send("login User");
};

const updateUser = (req, res) => {
  res.send("Update User");
};

module.exports = {
  register,
  login,
  updateUser,
};
