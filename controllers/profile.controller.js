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
                    result: {
                        primary_profile_ID: result[0]['primary_student_ID'],
                        profile_ID: result[0]['student_ID'],
                        profile_first_name: result[0]['student_first_name'],
                        profile_last_name: result[0]['student_last_name'],
                        profile_nickname: result[0]['student_nickname'],
                        profile_first_name_thai: result[0]['student_first_name_thai'],
                        profile_last_name_thai: result[0]['student_last_name_thai'],
                        profile_nickname_thai: result[0]['student_nickname_thai'],
                        profile_major: result[0]['student_major'],
                        profile_level: result[0]['student_level'],
                        profile_class: result[0]['student_class'],
                        profile_phone: result[0]['student_phone'],
                        profile_line_ID: result[0]['student_line_ID'],
                        profile_image: result[0]['student_image'],
                        profile_email: result[0]['student_email']
                    }
                });
                break;
            case 2:
                result = await teacherServices.getOne(authHeader.user_role_id);
                console.log(result);
                res.send({
                    status: true,
                    result: {
                        primary_profile_ID: result[0]['primary_teacher_ID'],
                        profile_ID: result[0]['student_ID'],
                        profile_first_name: result[0]['teacher_first_name'],
                        profile_last_name: result[0]['teacher_last_name'],
                        profile_nickname: result[0]['teacher_nickname'],
                        profile_first_name_thai: result[0]['teacher_first_name_thai'],
                        profile_last_name_thai: result[0]['teacher_last_name_thai'],
                        profile_nickname_thai: result[0]['teacher_nickname_thai'],
                        profile_major: result[0]['teacher_major'],
                        profile_phone: result[0]['teacher_phone'],
                        profile_line_ID: result[0]['teacher_line_ID'],
                        profile_image: result[0]['teacher_image'],
                        profile_email: result[0]['teacher_email']
                    }
                });
                break;
        }

    }
};

module.exports = { ...methods };