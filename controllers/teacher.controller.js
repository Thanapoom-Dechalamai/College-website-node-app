const teacherServices = require('../services/teacher.service');

const methods = {
    async onGetAll(req, res)
    {
        try
        {
            let list = await teacherServices.getAll();
            console.log(list);
            res.send({
                status: true,
                result: list
            });

        } catch (err)
        {
            console.log(err);
            res.send({
                status: true,
                result: err
            });
        }
    }
};

module.exports = { ...methods };