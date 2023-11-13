const major_service = require("../services/major.service");

const method = {
    async onGetAll(req, res) {
        try {
            let list = await major_service.getAll();
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
    }
};

module.exports = { ...method };