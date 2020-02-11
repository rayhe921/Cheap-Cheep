const router = require("express").Router();
const UserRoutes = require("./user");
const ItemRoutes = require("./item");
const ListRoutes = require("./list");

// Book routes
router.use("/user", UserRoutes);
router.use("/list", ListRoutes);
router.use("/item", ItemRoutes);

module.exports = router;
