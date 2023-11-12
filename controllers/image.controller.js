const imageService = require("../services/image.service");

const methods = {
    async onGetImage(req, res) {
        if (!req.user?.user_role || !req.user?.user_role_ID) {
            return res.send({
                status: false,
                result: "The request headers doesn't contain authorization!",
            });
        }

        const result = await imageService.getImage(req.user.user_role, req.user.user_role_ID);
        if (req.user.user_role == 1) {
            res.send({
                status: true,
                result: {
                    profile_image: result[0]['student_image']
                }
            });

        } else {
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
