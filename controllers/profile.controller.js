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
                result: "The request headers don't contain authorization!",
            });
        }

        let result;
        switch (authHeader.user_role)
        {
            case 1:
                result = await studentServices.getOne(authHeader.user_role_id);
                break;
            case 2:
                result = await teacherServices.getOne(authHeader.user_role_id);
                break;
        }

        if (!result || result.length === 0)
        {
            return res.send({
                status: false,
                result: "Profile not found!",
            });
        }

        const profileData = {
            primary_profile_ID: result[0]['primary_' + (authHeader.user_role === 1 ? 'student' : 'teacher') + '_ID'],
            profile_ID: result[0][authHeader.user_role === 1 ? 'student_ID' : 'teacher_ID'],
            profile_first_name: result[0][authHeader.user_role === 1 ? 'student_first_name' : 'teacher_first_name'],
            profile_last_name: result[0][authHeader.user_role === 1 ? 'student_last_name' : 'teacher_last_name'],
            profile_nickname: result[0][authHeader.user_role === 1 ? 'student_nickname' : 'teacher_nickname'],
            profile_first_name_thai: result[0][authHeader.user_role === 1 ? 'student_first_name_thai' : 'teacher_first_name_thai'],
            profile_last_name_thai: result[0][authHeader.user_role === 1 ? 'student_last_name_thai' : 'teacher_last_name_thai'],
            profile_nickname_thai: result[0][authHeader.user_role === 1 ? 'student_nickname_thai' : 'teacher_nickname_thai'],
            profile_gender: result[0][authHeader.user_role === 1 ? 'student_gender' : 'teacher_gender'],
            profile_major: result[0][authHeader.user_role === 1 ? 'student_major' : 'teacher_major'],
            profile_level: result[0]['student_level'],
            profile_class: result[0]['student_class'],
            profile_phone: result[0][authHeader.user_role === 1 ? 'student_phone' : 'teacher_phone'],
            profile_line_ID: result[0][authHeader.user_role === 1 ? 'student_line_ID' : 'teacher_line_ID'],
            profile_image: result[0][authHeader.user_role === 1 ? 'student_image' : 'teacher_image'],
            profile_email: result[0][authHeader.user_role === 1 ? 'student_email' : 'teacher_email']
        };

        res.send({
            status: true,
            result: profileData
        });
    }
};

module.exports = { ...methods };
