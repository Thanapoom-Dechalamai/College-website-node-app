const router = require("express").Router();
const controller = require('../../controllers/teacher.controller');

router.get('/getAll', controller.onGetAll);

module.exports = router;