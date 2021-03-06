const express = require("express");

const router = express.Router();

// middlewares
const {
    verifyUserOrMailExists,
} = require("../middlewares/verifyUsernameExists");

// controllers
const { signup } = require("../controllers/auth/signup");
const { login } = require("../controllers/auth/login");

// endpoints
router.post("/signup", [verifyUserOrMailExists], signup);
router.post("/login", login);
// router.post('/login',login);

module.exports = router;
