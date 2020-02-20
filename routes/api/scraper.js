const router = require("express").Router();
const scraperController = require("../../controllers/scraperController");

router
    .route("/walmart/:searchTerm")
    .get(scraperController.scrapeWalmart);


module.exports = router;