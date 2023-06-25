const router = require("express").Router();
const controller = require('../../controllers/major.controller');

router.get('/getAll', controller.onGetAll);

module.exports = router;