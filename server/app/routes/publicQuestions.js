const express = require("express");
const {
    getQuestions,
} = require("../controllers/user/publicQuestions/getQuestions");
const {
    postQuestions,
} = require("../controllers/user/publicQuestions/postQuestions");
const { answer } = require("../controllers/user/publicQuestions/answer");

const { verifyToken } = require("../middlewares/verifyToken");
const router = express.Router();

router.post("/questions", verifyToken, postQuestions);
router.get("/questions", verifyToken, getQuestions);
router.get("/answer", verifyToken, answer);

module.exports = router;
