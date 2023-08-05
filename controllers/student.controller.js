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
            if (!req.query.amount)
            {
                return res.status(401).send("Bad request");
            }

            const majorIds = [1, 2, 3, 4, 5, 6, 7, 8];
            const majorKeys = ['AC', 'BC', 'CG', 'FL', 'HT', 'IT', 'MK', 'TS'];
            const data = {};

            for (let i = 0; i < majorIds.length; i++)
            {
                const majorId = majorIds[i];
                const majorKey = `major${majorKeys[i]}`;
                data[majorKey] = await studentServices.getByAmount(majorId, req.query.amount);
            }

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
    }
    , async onGetByClass(req, res)
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