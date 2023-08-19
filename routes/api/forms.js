const router = require("express").Router();

router.use('/leaveNotice', require('./leave-notice-form'));
router.use('/requestForm', require('./request-form'));

module.exports = router;