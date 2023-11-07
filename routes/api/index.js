const router = require("express").Router();
const { requireAuth } = require('../../helpers/auth.helper');

router.use('/auth', require('./auth'));
router.use('/student', require('./student'));
router.use('/teacher', require('./teacher'));
router.use('/example', require('./example'));
router.use('/major', require('./major'));
router.use('/classroom', require('./classroom'));
router.use('/image', requireAuth, require('./image'));
router.use('/profile', requireAuth, require('./profile'));
router.use('/forms', require('./forms'));
router.use('/upload', require('./upload-files'));
router.use('/document', require('./document'));
router.use('/club', require('./club'));
router.use('/clubMembership', require('./club-membership'));
router.use('/announcement', require('./announcement'));

module.exports = router;