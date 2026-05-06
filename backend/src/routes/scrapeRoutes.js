const express = require("express");

const { scrapeNow } = require("../controllers/scrapeController");

const router = express.Router();

router.post("/", scrapeNow);

module.exports = router;
