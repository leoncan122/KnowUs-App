const express = require("express");
const {
    getLastPublications,
} = require("../controllers/user/home/getLastPublications");
const {
    //Search by word or category
    searchPublications,
} = require("../controllers/user/home/searchPublications");
const { getUserProfile } = require("../controllers/user/home/getUserProfile");

const router = express.Router();

router.get("/lastones", getLastPublications);
router.get("/search", searchPublications);
router.get("/user", getUserProfile);

module.exports = router;
