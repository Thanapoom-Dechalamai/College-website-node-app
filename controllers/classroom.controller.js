const classroom_service = require("../services/classroom.service");

const method = {
    // Get all //
    async onGetAll(req, res) {
        try {
            let list = await classroom_service.getAll();
            res.send({
                status: true,
                result: list
            });
        } catch (error) {
            res.send({
                status: false,
                result: error
            });
        }
    },
    // Get class by level //
    async onGetClassroomByLevel(req, res) {
        try {
            if (!req.body?.level) {
                return res.status(401).send("Bad request");
            }

            let list = await classroom_service.getClassByLevel(req.body.level);
            res.send({
                status: true,
                result: list
            });

        } catch (error) {
            res.send({
                status: false,
                result: error
            });
        }
    },
    // Get class by teacher //
    async onGetClassroomByTeacher(req, res) {
        try {
            if (!req.body?.teacher_ID) {
                return res.status(401).send("Bad request");
            }

            let list = await classroom_service.getClassByTeacher(req.body.teacher_ID);
            res.send({
                status: true,
                result: list
            });
        } catch (error) {
            res.send({
                status: false,
                result: error
            });
        }
    },

    // Update //
    async onUpdate(req, res) {
        try {
            if (!req.body?.id || !req.body?.classroomInfo) {
                return res.status(401).send("Bad request");
            }

            let result = await classroom_service.updateAt(req.body.id, req.body.classroomInfo);
            res.send({
                status: true,
                result: result
            });
        } catch (error) {
            res.send({
                status: false,
                result: error
            });
        }
    },

    // Delete //
    async onDelete(req, res) {
        try {
            if (!req.body?.id) {
                return res.status(401).send("Bad request");
            }

            let result = await classroom_service.removeAt(req.body.id);
            res.send({
                status: true,
                result: result
            });
        } catch (error) {
            res.send({
                status: false,
                result: error
            });
        }
    }

};

module.exports = { ...method };