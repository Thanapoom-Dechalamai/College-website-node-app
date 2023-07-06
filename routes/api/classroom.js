const router = require("express").Router();
const controller = require('../../controllers/classroom.controller');

router.get('/', controller.onGetAll);
router.post('/getClassroomByLevel', controller.onGetClassroom);
router.post('/update', controller.onUpdateAt);
router.post('/remove', controller.onRemove);

module.exports = router;