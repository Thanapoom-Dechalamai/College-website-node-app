const router = require("express").Router();
const { requireAuth } = require('../../helpers/auth.helper');

router.use('/auth', require('./auth'));
router.use('/student', requireAuth, require('./student'));
router.use('/teacher', requireAuth, require('./teacher'));
router.use('/example', requireAuth, require('./example'));
router.use('/major', requireAuth, require('./major'));
router.use('/classroom', requireAuth, require('./classroom'));
router.use('/image', requireAuth, require('./image'));
router.use('/profile', requireAuth, require('./profile'));
router.use('/forms', requireAuth, require('./forms'));
router.use('/upload', requireAuth, require('./upload-files'));
router.use('/document', requireAuth, require('./document'));
router.use('/club', requireAuth, require('./club'));
router.use('/clubMembership', requireAuth, require('./club-membership'));
router.use('/announcement', requireAuth, require('./announcement'));

module.exports = router;