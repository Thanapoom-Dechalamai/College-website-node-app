const { verifyAuthorization } = require("../helpers/auth.helper");
const imageService = require("../services/image.service");

const methods = {
    async onGetImage(req, res)
    {
        const authHeader = verifyAuthorization(req);
        console.log(authHeader);
        if (!authHeader?.user_role || !authHeader?.user_role_ID)
        {
            return res.send({
                status: false,
                result: "The request headers doesn't contain authorization!",
            });
        }

        const result = await imageService.getImage(authHeader.user_role, authHeader.user_role_ID);
        console.log(result);
        if (authHeader.user_role == 1)
        {
            res.send({
                status: true,
                result: {
                    profile_image: result[0]['student_image']
                }
            });

        } else
        {
            res.send({
                status: true,
                result: {
                    profile_image: result[0]['teacher_image']
                }
            });

        }
    }
};

module.exports = { ...methods };
