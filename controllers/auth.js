const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors/index");

const register = async (req, res) => {
  const user = await User.create(req.body);

  res.status(StatusCodes.CREATED).json(user.createJWT());
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password.");
  }
  const user = await User.findOne({ email });

  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials.");
  }

  const isPasswordCorrect = await user.comparePasswords(password);

  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials.");
  }

  res.status(StatusCodes.OK).json(user.createJWT());
};

const updateUser = async (req, res) => {
  const { firstname, lastname, email } = req.body;
  if (!email || !firstname || !lastname) {
    throw new BadRequestError("Please provide all values.");
  }
  const user = await User.findOneAndUpdate(
    { _id: req.user.userId },
    { firstname, lastname, email },
    { new: true, runValidators: true }
  );

  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials.");
  }

  res.status(StatusCodes.OK).json(user.createJWT());
};

module.exports = {
  register,
  login,
  updateUser,
};
