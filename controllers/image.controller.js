const { verifyAuthorization } = require("../helpers/auth.helper");
const imageService = require("../services/image.service");

const methods = {
    async onGetStudentImage(req, res)
    {
        const authHeader = verifyAuthorization(req);
        console.log(authHeader);
        if (!authHeader?.primary_student_id)
        {
            return res.send({
                status: false,
                result: "The request headers doesn't contain authorization!",
            });
        }

        const result = await imageService.getImage(authHeader.primary_student_id);

        res.send({
            status: true,
            result: result[0]
        });
    }
};

module.exports = { ...methods };
