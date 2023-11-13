const teacher_service = require("../services/teacher.service");

const methods = {
    async onGetAll(req, res) {
        try {
            let list = await teacher_service.getAll();
            res.send({
                status: true,
                result: list
            });
        } catch (error) {
            res.send({
                status: true,
                result: error
            });
        }
    },

    // Create //
    async onCreate(req, res) {
        try {
            if (!req.body) {
                return res.status(401).send("Bad request");
            }

            let result = await teacher_service.createOne(req.body);
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

    // Update //
    async onUpdate(req, res) {
        try {
            if (!req.body?.id || !req.body?.teacherInfo) {
                return res.status(401).send("Bad request");
            }

            let result = await teacher_service.updateOne(req.body.id, req.body.teacherInfo);
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
                res.status(401).send("Bad request");
            }

            let result = await teacher_service.deleteOne(req.body.id);
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

module.exports = { ...methods };