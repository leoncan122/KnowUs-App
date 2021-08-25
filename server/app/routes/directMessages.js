const express = require("express");
const {
    MessagesReceived,
} = require("../controllers/user/directMessages/getAllMessagesReceived");
const { verifyToken } = require("../middlewares/verifyToken");
const router = express.Router();

router.get("/inbox", verifyToken, MessagesReceived);

module.exports = router;
