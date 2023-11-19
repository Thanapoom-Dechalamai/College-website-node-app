const clubLeaveRequest_service = require("../../services/club/club-leave-request.service");
const { handleResponse } = require("../../functions/handleResponse.function");

const method = {
    // Get all //
    async onGetAll(req, res) {
        try {
            let result = await clubLeaveRequest_service.getAll();
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

            let result = await clubLeaveRequest_service.createOne(req.body);
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
            if (!req.body?.id || !req.body?.clubJoinRequestInfo) {
                return handleResponse(res, 400, "Bad request");
            }

            let result = await clubLeaveRequest_service.updateOne(req.body.id, req.body.clubJoinRequestInfo);
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

            let result = await clubLeaveRequest_service.deleteOne(req.body.id);
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
}

module.exports = { ...method };