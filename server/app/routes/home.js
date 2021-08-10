const express = require("express");
const {
    getLastPublications,
} = require("../controllers/user/home/getLastPublications");
const {
    //Search by word or category
    searchPublications,
} = require("../controllers/user/home/searchPublications");
const { getUserProfile } = require("../controllers/user/home/getUserProfile");

const { getRandomUser } = require("../controllers/user/home/getRandomUser");

const router = express.Router();
//http://localhost:4000/home
router.get("/lastones", getLastPublications);
router.get("/search", searchPublications);
router.get("/user/:userId", getUserProfile);
router.get("/randomuser", getRandomUser);

module.exports = router;
