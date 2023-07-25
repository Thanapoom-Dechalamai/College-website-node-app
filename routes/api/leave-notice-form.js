const router = require("express").Router();
const controller = require('../../controllers/leave-notice-form.controller');

router.get('/getAll', controller.onGetAll);
router.post('/getByID', controller.onGetByID);
router.post('/create', controller.onCreateOne);
router.post('/update', controller.onUpdateAt);
router.post('/remove', controller.onRemove);

module.exports = router;