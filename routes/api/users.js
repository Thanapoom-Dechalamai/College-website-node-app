const router = require("express").Router();
const controller = require('../../controllers/users.controller');

router.get('/getAll', controller.onGetAll);

module.exports = router;