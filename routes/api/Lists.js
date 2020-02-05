const router = require("express").Router();
const ListsController = require("../../controllers/ListsController");

// Matches with "/api/item"
router.route("/")
  .get(ListsController.findAll)
  .post(ListsController.create);

// Matches with "/api/item/:id"
router
  .route("/:id")
  .get(ListsController.findById)
  .put(ListsController.update)
  .delete(ListsController.remove);

module.exports = router;
