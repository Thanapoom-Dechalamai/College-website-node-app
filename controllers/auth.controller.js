const auth_service = require("../services/auth.service");

const method = {
    async onLogin(req, res) {
        try {
            if (!req.body?.email || !req.body?.password) res.status(401).send("Bad request");
            let token = await auth_service.login(req.body.email, req.body.password);
            res.send({
                status: true,
                result: {
                    accessToken: token
                }
            });
        } catch (error) {
            res.send({
                status: false,
                result: error
            });
        }
    },
    async onChangePassword(req, res) {
        try {
            if (!req.body?.password) {
                return res.status(401).send("Bad request");
            }

            if (!req.user?.user_role || !req.user?.user_role_ID) {
                return res.send({
                    status: false,
                    result: "The request headers don't contain authorization!",
                });
            }

            let result = await auth_service.changePassword(req.user.user_role_ID, req.body.password);
            res.send({
                status: true,
                result
            });
        } catch (error) {
            res.send({
                status: false,
                result: error
            });
        }
    }
};

module.exports = { ...method };