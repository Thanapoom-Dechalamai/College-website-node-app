const annuncement_service = require("../services/announcement.service");

const method = {
    // Get all //
    async onGetAll(req, res) {
        try {
            let list = await annuncement_service.getAll();
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

            let list = await annuncement_service.getOne(req.body.id);
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
            }

            let result = await annuncement_service.addOne(req.body);
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
            if (!req.body?.id || !req.body?.announcementInfo) {
                return res.status(401).send("Bad request");
            }

            let result = await annuncement_service.updateAt(req.body.id, req.body.announcementInfo);
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
            
            let result = await annuncement_service.removeAt(req.body.id);
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