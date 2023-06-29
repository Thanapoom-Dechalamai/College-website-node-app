const router = require("express").Router();

router.use('/student', require('./student'));
router.use('/teacher', require('./teacher'));
router.use('/example', require('./example'));
router.use('/major', require('./major'));
router.use('/classroom', require('./classroom'));
router.use('/homeroom', require('./homeroom'));

module.exports = router;