const router = require("express").Router();
const UserRoutes = require("./user");
const ItemRoutes = require("./item");
const ListRoutes = require("./list");

// Book routes
router.use("/user", UserRoutes);
<<<<<<< HEAD
router.use("/Llist", ListRoutes);
=======
router.use("/list", ListRoutes);
>>>>>>> master
router.use("/item", ItemRoutes);

module.exports = router;
