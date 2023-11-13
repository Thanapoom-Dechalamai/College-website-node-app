const router = require("express").Router();
const { requireAuth } = require("../../helpers/auth.helper");

router.use("/auth", require("./auth"));
router.use("/image", requireAuth, require("./image"));
router.use("/profile", requireAuth, require("./profile"));
router.use("/example", require("./example"));

router.use("/announcement", require("./announcement"));

router.use("/student", require("./student"));
router.use("/teacher", require("./teacher"));
router.use("/classroom", require("./classroom"));
router.use("/major", require("./major"));

router.use("/upload", require("./upload-files"));
router.use("/forms", require("./forms"));
router.use("/document", require("./document"));

// Clubs //
router.use("/club", require("./club/club"));
router.use("/clubJoinRequest", require("./club/club-join-request"));
router.use("/clubMembership", require("./club/club-membership"));
router.use("/clubManager", require("./club/club-manager"));

module.exports = router;