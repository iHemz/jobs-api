const authMiddleWare = require("./authentication");
const notFoundMiddleware = require("./not-found");
const errorHandlerMiddleware = require("./error-handler");

module.exports = { authMiddleWare, notFoundMiddleware, errorHandlerMiddleware };
