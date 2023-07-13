const studentServices = require('../services/student.service');

const methods = {
    async onGetAll(req, res)
    {
        try
        {
            let list = await studentServices.getAll();
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
    },
    async onGetByAmount(req, res)
    {
        try
        {
            if (!req.query.amount) res.status(401).send("Bad request");
            let majorAC = await studentServices.getByAmount(1, req.query.amount);
            let majorBC = await studentServices.getByAmount(2, req.query.amount);
            let majorCG = await studentServices.getByAmount(3, req.query.amount);
            let majorFL = await studentServices.getByAmount(4, req.query.amount);
            let majorHT = await studentServices.getByAmount(5, req.query.amount);
            let majorIT = await studentServices.getByAmount(6, req.query.amount);
            let majorMK = await studentServices.getByAmount(7, req.query.amount);
            let majorTS = await studentServices.getByAmount(8, req.query.amount);
            let data = {
                majorAC,
                majorBC,
                majorCG,
                majorFL,
                majorHT,
                majorIT,
                majorMK,
                majorTS
            };
            res.send({
                status: true,
                result: data
            });

        } catch (error)
        {
            console.log(error);
            res.send({
                status: false,
                result: error
            });
        }
    }, async onGetByClass(req, res)
    {
        try
        {
            if (!req.query.level || !req.query.class) res.status(401).send("Bad request");
            let result = await studentServices.getByClass(req.query.level, req.query.class);
            console.log(result);
            res.send({
                status: true,
                result
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
    async onCreateOne(req, res)
    {
        try
        {
            if (!req.body) res.status(401).send("Bad request");
            console.log(req.body);
            let result = await studentServices.addOne(req.body);
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
            if (!req.body || !req.body.id || !req.body.studentInfo) res.status(401).send("Bad request");
            console.log(`${req.body.id} + ${req.body.studentInfo}`);
            let result = await studentServices.updateAt(req.body.id, req.body.studentInfo);
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
            let result = await studentServices.removeAt(req.body.id);
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