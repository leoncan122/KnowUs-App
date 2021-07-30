const express = require("express");
const {
    getLastPublications,
} = require("../controllers/user/home/getLastPublications");
const router = express.Router();

router.get("/", getLastPublications);

module.exports = router;
