const router = require("express").Router();
const controller = require('../../controllers/image.controller');

router.get('/getImage', controller.onGetImage);

module.exports = router;