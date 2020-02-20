const router = require("express").Router();


const scraperController = require("../../controllers/scrapeCraiglistController");



router
    .route("/craiglist/:searchTerm")
    .get(scraperController.scraperCraiglist);

module.exports = router;