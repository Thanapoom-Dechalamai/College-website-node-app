const leaveNotice_student_columns = ["leave_notice_description", "leave_notice_choice", "leave_notice_start_datetime", "leave_notice_end_datetime", "leave_notice_create_datetime", "leave_notice_attached_file"];
const leaveNotice_teacher_columns = ["leave_notice_teacher_ID", "leave_notice_teacher_status", "leave_notice_teacher_description", "leave_notice_teacher_change_datetime"];
const leaveNotice_head_columns = ["leave_notice_head_ID", "leave_notice_head_status", "leave_notice_head_description", "leave_notice_head_change_datetime"];

module.exports = { leaveNotice_student_columns, leaveNotice_teacher_columns, leaveNotice_head_columns };