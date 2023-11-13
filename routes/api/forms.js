const router = require("express").Router();

router.use("/leaveNotice", require("./form/leave-notice-form"));
router.use("/requestForm", require("./form/request-form"));

module.exports = router;