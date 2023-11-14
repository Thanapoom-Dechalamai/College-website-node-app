
const requestForm_service = require("../../services/form/request-form.service");

const method = {
    // Get all //
    async onGetAll(req, res) {
        try {
            let list = await requestForm_service.getAll();
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
    // Get by ID //
    async onGetByID(req, res) {
        try {
            if (!req.body?.id) {
                return res.status(401).send("Bad request");
            }

            let list = await requestForm_service.getOne(req.body.id);
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

    // Create //
    async onCreate(req, res) {
        try {
            if (!req.body) {
                return res.status(401).send("Bad request");
            };

            let result = await requestForm_service.createOne(req.body);
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
            if (!req.body?.id || !req.body?.updateAs || !req.body?.requestFormInfo) {
                return res.status(401).send("Bad request");
            };

            let result = await requestForm_service.updateOne(req.body.id, req.body.updateAs, req.body.requestFormInfo);
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
            };

            let result = await requestForm_service.deleteOne(req.body.id);
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