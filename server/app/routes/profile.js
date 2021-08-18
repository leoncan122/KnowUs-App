const express = require("express");
const { verifyToken } = require("../middlewares/verifyToken");
const editProfile = require("../controllers/user/profile/editProfile");
const getMyAnswer = require("../controllers/user/profile/getMyAnswer");

const router = express.Router();

router.put("/edit", verifyToken, editProfile);
router.get("/cards", verifyToken, getMyAnswer);

module.exports = router;
