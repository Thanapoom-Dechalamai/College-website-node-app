const router = require("express").Router();
const controller = require('../../controllers/classroom.controller');

router.get('/', controller.onGetAll);

module.exports = router;