const router = require("express").Router();
const controller = require('../../controllers/upload-files.controller');

router.post('/image/student', controller.onUploadStudentImage);
router.post('/image/teacher', controller.onUploadTeacherImage);
router.post('/image/leaveNotice', controller.onUploadLeaveNotice);
router.post('/image/announcement', controller.onUploadAnnouncement);

module.exports = router;