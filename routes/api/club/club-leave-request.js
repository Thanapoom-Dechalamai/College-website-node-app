const router = require("express").Router();
const controller = require("../../../controllers/club/club-leave-request.controller");

router.get("/getAll", controller.onGetAll);
router.post("/create", controller.onCreate);
router.post("/update", controller.onUpdate);
router.post("/delete", controller.onDelete);

module.exports = router;