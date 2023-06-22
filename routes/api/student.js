const router = require("express").Router();
const controller = require('../../controllers/student.controller');

router.get('/getAll', controller.onGetAll);
router.post('/create', controller.onCreateOne);
router.post('/update', controller.onUpdateAt);
router.post('/remove', controller.onRemove);

module.exports = router;