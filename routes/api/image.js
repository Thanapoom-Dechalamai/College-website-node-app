const router = require("express").Router();
const controller = require('../../controllers/image.controller');

router.get('/getStudentImage', controller.onGetStudentImage);

module.exports = router;