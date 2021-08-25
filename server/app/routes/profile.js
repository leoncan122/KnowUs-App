const express = require("express");
const { verifyToken } = require("../middlewares/verifyToken");
const editProfile = require("../controllers/user/profile/editProfile");
const getMyAnswer = require("../controllers/user/profile/getMyAnswer");
const deleteProfile = require("../controllers/user/profile/deleteProfile");

const router = express.Router();

router.put("/edit", [verifyToken], editProfile);
router.get("/cards/:userId", getMyAnswer);
router.delete("/delete", [verifyToken], deleteProfile);

module.exports = router;
