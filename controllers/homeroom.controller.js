
const homeroomService = require('../services/homeroom.service');
const method = {
    async onGetAll(req, res)
    {
        try
        {
            let list = await homeroomService.getAll();
            console.log(list);
            res.send({
                status: true,
                result: list
            });

        } catch (error)
        {
            console.log(error);
            res.send({
                status: false,
                result: error
            });
        }
    }
};

module.exports = { ...method };