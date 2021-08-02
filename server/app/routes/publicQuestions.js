const express = require("express");
const {
    getQuestions,
} = require("../controllers/user/publicQuestions/getQuestions");
const { verifyToken } = require("../middlewares/verifyToken");
const router = express.Router();

router.get("/questions", verifyToken, getQuestions);

module.exports = router;
