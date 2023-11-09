const club_service = require("../services/club.service");
const handleResponse = require("../functions/handleResponse.function");

const method = {
    // Get all //
    async onGetAll(req, res) {
        try {
            let list = await club_service.getAll();
            handleResponse(res, 200, { status: true, result: list });
        } catch (error) {
            handleResponse(res, 500, { status: false, result: "Internal Server Error" });
        }
    },

    // Create //
    async onCreate(req, res) {
        try {
            if (!req.body) {
                handleResponse(res, 400, "Bad request");
            }

            let result = await club_service.createOne(req.body);
            handleResponse(res, 200, { status: true, result });
        } catch (error) {
            handleResponse(res, 500, { status: false, result: "Internal Server Error" });
        }
    },

    // Update //
    async onUpdate(req, res) {
        try {
            if (!req.body?.id || !req.body?.clubInfo) {
                handleResponse(res, 400, "Bad request");
            }

            let result = await club_service.updateOne(req.body.id, req.body.clubInfo);
            handleResponse(res, 200, { status: true, result });
        } catch (error) {
            handleResponse(res, 500, { status: false, result: "Internal Server Error" });
        }
    },

    // Delete //
    async onDelete(req, res) {
        try {
            if (!req.body?.id) {
                res.status(401).send("Bad request")
            }

            let result = await club_service.deleteOne(req.body.id);
            handleResponse(res, 200, { status: true, result });
        } catch (error) {
            handleResponse(res, 500, { status: false, result: "Internal Server Error" });
        }
    }
};

module.exports = { ...method };