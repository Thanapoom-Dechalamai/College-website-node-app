const upload_files_service = require("../services/upload-files.service");

const method = {
    // Student image //
    async onUploadStudentImage(req, res) {
        try {
            if (!req.files["file"] || !req.body.filename) {
                return res.status(401).send("Bad request");
            }

            const path = "/assets/profilePic/students/" + req.body.filename;
            const data = req.files["file"].data;
            let result = await upload_files_service.uploadFile(path, data);
            res.send({
                status: true,
                result
            });
        } catch (error) {
            res.send({
                status: false,
                result: error
            });
        }
    },
    // Teacher image //
    async onUploadTeacherImage(req, res) {
        try {
            if (!req.files["file"] || !req.body.filename) {
                return res.status(401).send("Bad request");
            }

            const path = "/assets/profilePic/teachers/" + req.body.filename;
            const data = req.files["file"].data;
            let result = await upload_files_service.uploadFile(path, data);
            res.send({
                status: true,
                result
            });
        } catch (error) {
            res.send({
                status: false,
                result: error
            });
        }
    },
    // Announcement image //
    async onUploadAnnouncementImage(req, res) {
        try {
            if (!req.files["file"] || !req.body.filename) {
                return res.status(401).send("Bad request");
            }

            const path = "/assets/files/announcements/" + req.body.filename;
            const data = req.files["file"].data;
            let result = await upload_files_service.uploadFile(path, data);
            res.send({
                status: true,
                result
            });
        } catch (error) {
            res.send({
                status: false,
                result: error
            });
        }
    },
    // Club image //
    async onUploadClubImage(req, res) {
        try {
            if (!req.files["file"] || !req.body.filename) {
                return res.status(401).send("Bad request");
            }

            const path = "/assets/profilePic/clubs/" + req.body.filename;
            const data = req.files["file"].data;
            let result = await upload_files_service.uploadFile(path, data);
            res.send({
                status: true,
                result
            });
        } catch (error) {
            res.send({
                status: false,
                result: error
            });
        }
    },

    // Leave notice file //
    async onUploadLeaveNoticeFile(req, res) {
        try {
            if (!req.files["file"] || !req.body.filename) {
                return res.status(401).send("Bad request");
            }

            const path = "/assets/files/leaveNotices/" + req.body.filename;
            const data = req.files["file"].data;
            let result = await upload_files_service.uploadFile(path, data);
            res.send({
                status: true,
                result
            });
        } catch (error) {
            res.send({
                status: false,
                result: error
            });
        }
    },
    // Request form file //
    async onUploadRequestFormFile(req, res) {
        try {
            if (!req.files["file"] || !req.body.filename) {
                return res.status(401).send("Bad request");
            }

            const path = "/assets/files/requestForms/" + req.body.filename;
            const data = req.files["file"].data;
            let result = await upload_files_service.uploadFile(path, data);
            res.send({
                status: true,
                result
            });
        } catch (error) {
            res.send({
                status: false,
                result: error
            });
        }
    },
};

module.exports = { ...method };