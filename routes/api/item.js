const router = require("express").Router();
const itemController = require("../../controllers/itemController");
const userController = require("../../controllers/userController");
// const listController = require("../../controllers/listController");

router.route("/")
  .get(itemController.findAll)
  .post(itemController.create);

  router.route("/")
  .get(userController.findAll)
  


router
  .route("/:id")
  .get(itemController.findById)
  .put(itemController.update)
  .delete(itemController.remove);

  router.route("/")
  .get(userController.findAll)
  .post(userController.create);

router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);


module.exports = router;
