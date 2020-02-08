const router = require("express").Router();
const UserRoutes = require("./user");
const ItemRoutes = require("./item");
const ListRoutes = require("./List");

// Book routes
router.use("/user", UserRoutes);
router.use("/Llist", ListRoutes);
router.use("/item", ItemRoutes);

module.exports = router;
