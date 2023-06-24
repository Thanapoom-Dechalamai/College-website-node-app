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
    },
    async onCreateOne(req, res)
    {
        try
        {
            if (!req.body) res.status(401).send("Bad request");
            console.log(req.body);
            let result = await teacherServices.addOne(req.body);
            res.send({
                status: true,
                result: result
            });
        } catch (error)
        {
            console.log(error);
            res.send({
                status: false,
                result: error
            });
        }
    },
    async onUpdateAt(req, res)
    {
        try
        {
            if (!req.body || !req.body.id || !req.body.teacherInfo) res.status(401).send("Bad request");
            console.log(`${req.body.id} + ${req.body.teacherInfo}`);
            let result = await teacherServices.updateAt(req.body.id, req.body.teacherInfo);
            console.log(result);
            res.send({
                status: true,
                result: result
            });
        } catch (error)
        {
            console.log(error);
            res.send({
                status: false,
                result: error
            });
        }
    },
    async onRemove(req, res)
    {
        try
        {
            if (!req.body || !req.body.id) res.status(401).send("Bad request");
            let result = await teacherServices.removeAt(req.body.id);
            console.log(result);
            res.send({
                status: true,
                result: result
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

module.exports = { ...methods };