const router = require("express").Router();
const controller = require("../../controllers/example.controller");

router.get("/", controller.onGetExample);

module.exports = router;