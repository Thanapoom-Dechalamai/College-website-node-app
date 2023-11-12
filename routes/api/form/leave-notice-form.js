const router = require("express").Router();
const controller = require('../../../controllers/form/leave-notice-form.controller');

router.get('/getAll', controller.onGetAll);
router.post('/getByID', controller.onGetByID);
router.post('/create', controller.onCreate);
router.post('/update', controller.onUpdate);
router.post('/delete', controller.onDelete);

module.exports = router;