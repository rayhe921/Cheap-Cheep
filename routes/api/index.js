const router = require("express").Router();
const ListsRoutes = require("./Lists");
const ItemRoutes = require("./Item");
const ListRoutes = require("./List");

// Book routes
router.use("/Lists", ListsRoutes);
router.use("/List", ListRoutes);
router.use("/Item", ItemRoutes);

module.exports = router;
