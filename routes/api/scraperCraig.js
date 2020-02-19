const router = require("express").Router();
const scraperCraigController = require("../../controllers/scrapeCraigController");

router
    .route("/Craiglist/:searchTerm")
    .get(scraperCraigController.scrapeCraiglist);

module.exports = router; z