const router = require("express").Router();
const controller = require("../../../controllers/club/club-manager.controller");

router.get("/getAll", controller.onGetAll);

router.post("/create", controller.onCreate);
router.post("/createMultiple", controller.onCreateMultiple);

router.post("/update", controller.onUpdate);

router.post("/delete", controller.onDelete);
router.post("/deleteMultiple", controller.onDeleteMultiple);

module.exports = router;