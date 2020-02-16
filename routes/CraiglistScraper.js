const router = require("express").Router();


const scraperController = require("../controllers/scrapeCraiglist");



router
    .route("/craiglist/:searchTerm")
    .get(scrapeCraiglist.scrapeCraiglist);

module.exports = router;