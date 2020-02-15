const router = require("express").Router();
const scraperController = require("../../controllers/scrapeCraigController");

router
    .route("/Craiglist/:searchTerm")
    .get(scrapeCraigController.scrapeCraiglist);

module.exports = router;