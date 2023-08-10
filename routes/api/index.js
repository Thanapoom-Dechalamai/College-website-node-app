const router = require("express").Router();

router.use('/student', require('./student'));
router.use('/teacher', require('./teacher'));
router.use('/example', require('./example'));
router.use('/major', require('./major'));
router.use('/classroom', require('./classroom'));
router.use('/auth', require('./auth'));
router.use('/image', require('./image'));
router.use('/profile', require('./profile'));
router.use('/forms', require('./forms'));
router.use('/upload', require('./upload-files'));
router.use('/document', require('./document'));

module.exports = router;