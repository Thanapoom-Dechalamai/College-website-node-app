const clubManager_service = require("../../services/club/club-manager.service");
const { handleResponse } = require("../../functions/handleResponse.function");

const method = {
    // Get all //
    async onGetAll(req, res) {
        try {
            let result = await clubManager_service.getAll();
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

    // Create //
    async onCreate(req, res) {
        try {
            if (!req.body) {
                return handleResponse(res, 400, "Bad request");
            }

            let result = await clubManager_service.createOne(req.body);
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
    // Create multiple //
    async onCreateMultiple(req, res) {
        try {
            if (!req.body?.club_ID || !req.body?.clubManagers) {
                return handleResponse(res, 400, "Bad request");
            }

            let result = await clubManager_service.createMultiple(req.body.club_ID, req.body.clubManagers);
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
            if (!req.body?.id || !req.body?.clubManagerInfo) {
                return handleResponse(res, 400, "Bad request");
            }

            let result = await clubManager_service.updateOne(req.body.id, req.body.clubManagerInfo);
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
                return handleResponse(res, 400, "Bad request");
            }

            let result = await clubManager_service.deleteOne(req.body.id);
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
    // Delete multiple //
    async onDeleteMultiple(req, res) {
        try {
            if (!req.body?.club_ID || !req.body?.clubManagers) {
                return handleResponse(res, 400, "Bad request");
            }

            let result = await clubManager_service.deleteMultiple(req.body.club_ID, req.body.clubManagers);
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
};

module.exports = { ...method };