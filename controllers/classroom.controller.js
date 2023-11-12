
const classroomService = require('../services/classroom.service');

const method = {
    // Get all //
    async onGetAll(req, res) {
        try {
            let list = await classroomService.getAll();
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

            let list = await classroomService.getClassByLevel(req.body.level);
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

            let list = await classroomService.getClassByTeacher(req.body.teacher_ID);
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

            let result = await classroomService.updateAt(req.body.id, req.body.classroomInfo);
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

            let result = await classroomService.removeAt(req.body.id);
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