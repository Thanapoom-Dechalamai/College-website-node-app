const dayjs = require("dayjs");
const db = require("../db.service");
require("dotenv").config();
const { leaveNotice_student_columns, leaveNotice_teacher_columns, leaveNotice_head_columns } = require("../../constants/form/leave-notice.constant");

const methods = {
    // Get all //
    getAll() {
        return new Promise(async (resolve, reject) => {
            try {
                const sqlQuery = `SELECT * FROM ${process.env.DB_TABLE_LEAVE_NOTICE}`;
                const results = await db.query(sqlQuery);
                resolve(results);
            } catch (error) {
                reject(error);
            }
        });
    },
    // Get one //
    getOne(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const sqlQuery = `SELECT * FROM ${process.env.DB_TABLE_LEAVE_NOTICE} WHERE leave_notice_ID = ?`;
                const results = await db.query(sqlQuery, [id]);
                resolve(results);
            } catch (error) {
                reject(error);
            }
        });
    },

    // Create //
    createOne(object) {
        return new Promise(async (resolve, reject) => {
            try {
                object.leave_notice_create_datetime = dayjs().toISOString();

                const columns = ["leave_notice_student_ID", ...leaveNotice_student_columns];
                const values = columns.map(column => object[column]);
                const placeholders = new Array(values.length).fill("?").join(", ");

                const sqlQuery = `INSERT INTO ${process.env.DB_TABLE_LEAVE_NOTICE} (${columns.join(", ")}) VALUES (${placeholders})`;

                const results = await db.query(sqlQuery, values);
                resolve(results);
            } catch (error) {
                reject(error);
            }
        });
    },


    // Update //
    updateOne(id, updateAs, object) {
        return new Promise(async (resolve, reject) => {
            try {
                let allowedColumns
                switch (updateAs) {
                    // If student updates //
                    case 1:
                        object.leave_notice_create_datetime = dayjs().toISOString();
                        allowedColumns = leaveNotice_student_columns;
                        break;
                    // If teacher evaluates //
                    case 2:
                        object.leave_notice_teacher_change_datetime = dayjs().toISOString();
                        allowedColumns = leaveNotice_teacher_columns;
                        break;
                    // If head evaluates //
                    case 3:
                        object.leave_notice_head_change_datetime = dayjs().toISOString();
                        allowedColumns = leaveNotice_head_columns;
                        break;
                    default:
                        allowedColumns = leaveNotice_student_columns.concat(leaveNotice_teacher_columns, leaveNotice_head_columns);
                        break;
                }
                const columns = [];
                const values = [];
                for (const column of allowedColumns) {
                    if (column in object) {
                        columns.push(`${column} = ?`);
                        values.push(object[column]);
                    }
                }

                if (columns.length == 0) {
                    return res.sendStatus(204);
                }

                const sqlQuery = `UPDATE ${process.env.DB_TABLE_LEAVE_NOTICE} SET ${columns.join(", ")} WHERE leave_notice_ID = ?`;

                values.push(id);
                const results = await db.query(sqlQuery, values);
                resolve(results);
            } catch (error) {
                reject(error);
            }
        });
    },

    // Delete //
    deleteOne(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const sqlQuery = `DELETE FROM ${process.env.DB_TABLE_LEAVE_NOTICE} WHERE leave_notice_ID = ?`;
                const results = await db.query(sqlQuery, [id]);
                resolve(results);
            } catch (error) {
                reject(error);
            }
        });
    }
};

module.exports = { ...methods };
