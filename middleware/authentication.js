const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const authMiddleWare = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("No token provided");
  }

  const token = authHeader.split(" ").at(-1);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { firstname, lastname, email, userId } = decoded;
    req.user = { firstname, lastname, email, userId };
    next();
  } catch (error) {
    throw new UnauthenticatedError("No permission to access this route.");
  }
};

module.exports = authMiddleWare;
