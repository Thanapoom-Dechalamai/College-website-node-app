const student_service = require("../services/student.service");
const teacher_service = require("../services/teacher.service");

const methods = {
    // Get one //
    async onGetOne(req, res) {
        const { user_role, user_role_ID } = req.user || {};
    
        if (!user_role || !user_role_ID) {
            return res.send({
                status: false,
                result: "The request headers don't contain authorization!",
            });
        }
    
        let result;
        switch (user_role) {
            case 1:
                result = await student_service.getOne(user_role_ID);
                break;
            case 2:
                result = await teacher_service.getOne(user_role_ID);
                break;
            default:
                return res.send({
                    status: false,
                    result: "Invalid user role!",
                });
        }
    
        if (!result || result.length === 0) {
            return res.send({
                status: false,
                result: "Profile not found!",
            });
        }
    
        const rolePrefix = user_role === 1 ? "student" : "teacher";
    
        const profileData = {
            primary_profile_ID: result[0][`primary_${rolePrefix}_ID`],
            profile_position: result[0][`${rolePrefix}_position`],
            profile_ID: result[0][`${rolePrefix}_ID`],
            profile_first_name: result[0][`${rolePrefix}_first_name`],
            profile_last_name: result[0][`${rolePrefix}_last_name`],
            profile_nickname: result[0][`${rolePrefix}_nickname`],
            profile_first_name_thai: result[0][`${rolePrefix}_first_name_thai`],
            profile_last_name_thai: result[0][`${rolePrefix}_last_name_thai`],
            profile_nickname_thai: result[0][`${rolePrefix}_nickname_thai`],
            profile_gender: result[0][`${rolePrefix}_gender`],
            profile_major: result[0][`${rolePrefix}_major`],
            profile_level: user_role === 1 ? result[0].student_level : undefined,
            profile_class: user_role === 1 ? result[0].student_class : undefined,
            profile_phone: result[0][`${rolePrefix}_phone`],
            profile_line_ID: result[0][`${rolePrefix}_line_ID`],
            profile_image: result[0][`${rolePrefix}_image`],
            profile_email: result[0][`${rolePrefix}_email`],
        };
    
        res.send({
            status: true,
            result: profileData,
        });
    }
    
};

module.exports = { ...methods };
