const router = require("express").Router();
const controller = require("../../controllers/upload-files.controller");

router.post("/image/student", controller.onUploadStudentImage);
router.post("/image/teacher", controller.onUploadTeacherImage);
router.post("/image/announcement", controller.onUploadAnnouncementImage);
router.post("/image/club", controller.onUploadClubImage);

router.post("/file/leaveNotice", controller.onUploadLeaveNoticeFile);
router.post("/file/requestForm", controller.onUploadRequestFormFile);

module.exports = router;