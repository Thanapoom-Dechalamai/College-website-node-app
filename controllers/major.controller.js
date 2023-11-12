
const majorServices = require('../services/major.service');

const method = {
    async onGetAll(req, res) {
        try {
            let list = await majorServices.getAll();
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