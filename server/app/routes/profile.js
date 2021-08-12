const express = require("express");
const { verifyToken } = require("../middlewares/verifyToken");
const editProfile = require("../controllers/user/profile/editProfile");
const router = express.Router();

router.put("/edit", verifyToken, editProfile);

module.exports = router;
