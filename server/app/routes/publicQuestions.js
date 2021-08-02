const express = require("express");
const {
    getQuestions,
} = require("../controllers/user/publicQuestions/getQuestions");
const {
    postQuestions,
} = require("../controllers/user/publicQuestions/postQuestions");

const { verifyToken } = require("../middlewares/verifyToken");
const router = express.Router();

router.post("/questions", verifyToken, postQuestions);
router.get("/questions", verifyToken, getQuestions);

module.exports = router;
