const router = require("express").Router();
const UserRoutes = require("./user");
const ItemRoutes = require("./Item");
const ListRoutes = require("./List");

// Book routes
router.use("/User", UserRoutes);
router.use("/List", ListRoutes);
router.use("/Item", ItemRoutes);

module.exports = router;
