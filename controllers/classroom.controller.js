
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
    async onGetClassroom(req, res)
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
    }
};

module.exports = { ...method };