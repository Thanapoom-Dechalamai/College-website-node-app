const router = require("express").Router();

router.use('/leaveNotice', require('./leave-notice-form'));

module.exports = router;