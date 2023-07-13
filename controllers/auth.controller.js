
const authService = require('../services/auth.service');
const method = {
    async onLogin(req, res)
    {
        try
        {
            if (!req.body || !req.body.email || !req.body.password) res.status(401).send("Bad request");
            let token = await authService.login(req.body.email, req.body.password);
            console.log(token);
            res.send({
                status: true,
                result: {
                    accessToken: token
                }
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
    // async onValidateToken(req, res)
    // {
    //     try
    //     {
    //         if (!req.body || !req.body.email || !req.body.password) res.status(401).send("Bad request");
    //         let token = await authService.login(req.body.email, req.body.password);
    //         console.log(token);
    //         res.send({
    //             status: true,
    //             result: {
    //                 accessToken: token
    //             }
    //         });
    //     } catch (error)
    //     {
    //         console.log(error);
    //         res.send({
    //             status: false,
    //             result: error
    //         });
    //     }
    // }
};

module.exports = { ...method };