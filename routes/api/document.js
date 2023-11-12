const router = require("express").Router();
const controller = require('../../controllers/document.controller');

// THIS TABLE HAS BEEN REMOVED FROM THE DATABASE //

router.get('/getAll', controller.onGetAll);
router.post('/getOne', controller.onGetByID);
router.post('/create', controller.onCreateOne);
router.post('/update', controller.onUpdateAt);
router.post('/remove', controller.onRemove);

module.exports = router;