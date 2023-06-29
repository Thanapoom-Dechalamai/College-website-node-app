const router = require("express").Router();
const controller = require('../../controllers/homeroom.controller');

router.get('/getAll', controller.onGetAll);

module.exports = router;