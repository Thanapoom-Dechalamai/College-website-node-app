const router = require("express").Router();
const controller = require("../../controllers/profile.controller");

router.get("/getProfile", controller.onGetOne);

module.exports = router;