const router = require("express").Router();
const controller = require('../../controllers/classroom.controller');

router.get('/', controller.onGetAll);
router.post('/getClassroom', controller.onGetClassroom);

module.exports = router;