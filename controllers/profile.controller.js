const studentServices = require('../services/student.service');
const teacherServices = require('../services/teacher.service');
const { verifyAuthorization } = require("../helpers/auth.helper");
const methods = {
    async onGetOne(req, res)
    {
        const authHeader = verifyAuthorization(req);
        console.log(authHeader);
        if (!authHeader?.user_role || !authHeader?.user_role_id)
        {
            return res.send({
                status: false,
                result: "The request headers doesn't contain authorization!",
            });
        }
        let result;
        switch (authHeader.user_role)
        {
            case 1:
                result = await studentServices.getOne(authHeader.user_role_id);
                console.log(result);
                res.send({
                    status: true,
                    result: result[0]
                });
                break;
            case 2:
                result = await teacherServices.getOne(authHeader.user_role_id);
                console.log(result);
                res.send({
                    status: true,
                    result: result[0]
                });
                break;
        }

    }
};

module.exports = { ...methods };