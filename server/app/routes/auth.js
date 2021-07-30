const express = require("express");
const router = express.Router();

//middlewares
const { verifyUsernameExists } = require("../middlewares/verifyUsernameExists");

//controllers
const { signup } = require("../controllers/auth/signup");

//endpoints
router.post("/signup", verifyUsernameExists, signup);

module.exports = router;
