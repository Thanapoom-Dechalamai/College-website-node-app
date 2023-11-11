const student_services = require("../services/student.service");

const methods = {
    // Get all //
    async onGetAll(res) {
        try {
            let result = await student_services.getAll();
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
    // Get all (Only names) //
    async onGetInfo(res) {
        try {
            let result = await student_services.getInfo();
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
    // Get by a given amount //
    async onGetByAmount(req, res) {
        try {
            if (!req.query.amount) {
                return res.status(401).send("Bad request");
            }

            const majorIds = [1, 2, 3, 4, 5, 6, 7, 8];
            const majorKeys = ["AC", "BC", "CG", "FL", "HT", "IT", "MK", "TS"];
            const result = {};

            for (let i = 0; i < majorIds.length; i++) {
                const majorId = majorIds[i];
                const majorKey = `major${majorKeys[i]}`;
                result[majorKey] = await student_services.getByAmount(majorId, req.query.amount);
            }
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
    // Get students by class. //
    async onGetByClass(req, res) {
        try {
            if (!req.query.level || !req.query.class) {
                res.status(401).send("Bad request");
            };

            let result = await student_services.getByClass(req.query.level, req.query.class);
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

    // Create //
    async onCreate(req, res) {
        try {
            if (!req.body) {
                handleResponse(res, 400, "Bad request");
            }

            let result = await student_services.createOne(req.body);
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
            if (!req.body?.id || !req.body?.studentInfo) {
                res.status(401).send("Bad request")
            };

            let result = await student_services.updateOne(req.body.id, req.body.studentInfo);
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
            };

            let result = await student_services.deleteOne(req.body.id);
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