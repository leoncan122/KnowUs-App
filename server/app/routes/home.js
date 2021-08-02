const express = require("express");
const {
    getLastPublications,
} = require("../controllers/user/home/getLastPublications");
const {
    //Search by word or category
    searchPublications,
} = require("../controllers/user/home/searchPublications");

const router = express.Router();

router.get("/", getLastPublications);
router.get("/search", searchPublications);

module.exports = router;
