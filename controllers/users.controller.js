const userServices = require('../services/users.service');

const methods = {
    async onGetAll(req, res)
    {
        try
        {
            let list = await userServices.getAll();
            console.log(`controller: ${list}`);
            res.send(list);

        } catch (err)
        {
            console.log(err);
            res.send(err);
        }
    }
};

module.exports = { ...methods };