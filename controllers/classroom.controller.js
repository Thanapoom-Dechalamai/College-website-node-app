
const classroomService = require('../services/classroom.service');
const method = {
    async onGetAll(req, res)
    {
        try
        {
            let list = await classroomService.getAll();
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
    async onGetClassroomByLevel(req, res)
    {
        try
        {
            if (!req.body || !req.body.level) res.status(401).send("Bad request");
            let list = await classroomService.getClassByLevel(req.body.level);
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
    async onGetClassroomByTeacher(req, res)
    {
        try
        {
            if (!req.body || !req.body.teacher_ID)
            {
                res.status(401).send("Bad request");
                return;
            }
            let list = await classroomService.getClassByTeacher(req.body.teacher_ID);
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
    async onUpdateAt(req, res)
    {
        try
        {
            if (!req.body || !req.body.id || !req.body.classroomInfo) res.status(401).send("Bad request");
            console.log(`${req.body.id} + ${req.body.classroomInfo}`);
            let result = await classroomService.updateAt(req.body.id, req.body.classroomInfo);
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
            let result = await classroomService.removeAt(req.body.id);
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

module.exports = { ...method };