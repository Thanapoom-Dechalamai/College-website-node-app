
const clubMembershipService = require('../services/club-membership.service');
const method = {
    async onGetAll(req, res)
    {
        try
        {
            let list = await clubMembershipService.getAll();
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
    async onGetByID(req, res)
    {
        try
        {
            if (!req.body || !req.body.id)
            {
                res.status(401).send("Bad request");
                return;
            }
            let list = await clubMembershipService.getOne(req.body.id);
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
    async onCreateOne(req, res)
    {
        try
        {
            if (!req.body) res.status(401).send("Bad request");
            console.log(req.body);
            let result = await clubMembershipService.addOne(req.body);
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
            if (!req.body || !req.body.id || !req.body.clubMembershipInfo) res.status(401).send("Bad request");
            console.log(`${req.body.id} + ${req.body.clubMembershipInfo}`);
            let result = await clubMembershipService.updateAt(req.body.id, req.body.clubMembershipInfo);
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
            let result = await clubMembershipService.removeAt(req.body.id);
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