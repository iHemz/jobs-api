const express = require("express");
const router = express.Router();
const {
  login,
  register,
  updateUser,
  verifyToken,
} = require("../controllers/auth");
const { authMiddleWare } = require("../middleware");

router.post("/login", login);
router.post("/register", register);
router.patch("/update-user", authMiddleWare, updateUser);
router.post("/verify-user", authMiddleWare, verifyToken);

module.exports = router;
