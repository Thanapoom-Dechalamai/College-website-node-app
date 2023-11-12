const studentServices = require("../services/student.service");

const methods = {
    // Get all //
    async onGetAll(req, res) {
        try {
            let list = await studentServices.getAll();
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
    // Get info //
    async onGetInfo(req, res) {
        try {
            let list = await studentServices.getInfo();
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
    // Get by given amount //
    async onGetByAmount(req, res) {
        try {
            if (!req.query.amount) {
                return res.status(401).send("Bad request");
            }

            const majorIds = [1, 2, 3, 4, 5, 6, 7, 8];
            const majorKeys = ["AC", "BC", "CG", "FL", "HT", "IT", "MK", "TS"];
            const data = {};

            for (let i = 0; i < majorIds.length; i++) {
                const majorId = majorIds[i];
                const majorKey = `major${majorKeys[i]}`;
                data[majorKey] = await studentServices.getByAmount(majorId, req.query.amount);
            }

            res.send({
                status: true,
                result: data
            });
        } catch (error) {
            res.send({
                status: false,
                result: error
            });
        }
    },
    // Get by class //
    async onGetByClass(req, res) {
        try {
            if (!req.query.level || !req.query.class) {
                return res.status(401).send("Bad request");
            }

            let result = await studentServices.getByClass(req.query.level, req.query.class);
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
                return res.status(401).send("Bad request");
            }

            let result = await studentServices.createOne(req.body);
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
                return res.status(401).send("Bad request");
            }

            let result = await studentServices.updateOne(req.body.id, req.body.studentInfo);
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

            let result = await studentServices.deleteOne(req.body.id);
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