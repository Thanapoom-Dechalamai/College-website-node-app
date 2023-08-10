const router = require("express").Router();
const controller = require('../../controllers/club.controller');

router.get('/getAll', controller.onGetAll);
router.post('/getOne', controller.onGetByID);
router.post('/update', controller.onUpdateAt);
router.post('/remove', controller.onRemove);

module.exports = router;