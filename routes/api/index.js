const router = require("express").Router();

router.use('/student', require('./student'));
router.use('/teacher', require('./teacher'));
router.use('/example', require('./example'));
router.use('/major', require('./major'));
router.use('/classroom', require('./classroom'));
router.use('/auth', require('./auth'));
router.use('/image', require('./image'));
router.use('/forms', require('./forms'));

module.exports = router;