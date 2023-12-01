const dayjs = require("dayjs");
const db = require("../db.service");
const { requestForm_student_columns, requestForm_teacher_columns, requestForm_head_columns } = require("../../constants/form/request-form.constant");
require("dotenv").config();

const methods = {
    // Get all //
    getAll() {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM ${process.env.DB_TABLE_REQUEST_FORM}`;
            db.query(query)
                .then(result => {
                    resolve(result);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    // Get one //
    getOne(id) {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM ${process.env.DB_TABLE_REQUEST_FORM} WHERE request_form_ID = ?`;
            db.query(query, [id])
                .then(result => {
                    resolve(result);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },

    // Create //
    createOne(object) {
        return new Promise(async (resolve, reject) => {
            try {
                object.request_form_create_datetime = dayjs().toISOString();

                const columns = ["request_form_student_ID", ...requestForm_student_columns];
                const values = columns.map(column => object[column]);
                const placeholders = new Array(values.length).fill("?").join(", ");

                const sqlQuery = `INSERT INTO ${process.env.DB_TABLE_REQUEST_FORM} (${columns.join(", ")}) VALUES (${placeholders})`;

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
                let allowedColumns;
                switch (updateAs) {
                    // If student updates //
                    case 1:
                        object.request_form_create_datetime = dayjs().toISOString();
                        allowedColumns = requestForm_student_columns;
                        break;
                    // If teacher evaluates //
                    case 2:
                        object.request_form_teacher_change_datetime = dayjs().toISOString();
                        allowedColumns = requestForm_teacher_columns;
                        break;
                    // If head evaluates //
                    case 3:
                        object.request_form_head_change_datetime = dayjs().toISOString();
                        allowedColumns = requestForm_head_columns;
                        break;
                    default:
                        allowedColumns = requestForm_student_columns.concat(requestForm_teacher_columns, requestForm_head_columns);
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

                if (columns.length === 0) {
                    return res.sendStatus(204);
                }

                const sqlQuery = `UPDATE ${process.env.DB_TABLE_REQUEST_FORM} SET ${columns.join(", ")} WHERE request_form_ID = ?`;
                values.push(id);

                const results = await db.query(sqlQuery, values);
                resolve(results);
            } catch (error) {
                reject(error);
            }
        })
    },

    // Delete //
    deleteOne(id) {
        return new Promise((resolve, reject) => {
            const query = `DELETE FROM ${process.env.DB_TABLE_REQUEST_FORM} WHERE request_form_ID = ?`;
            db.query(query, [id])
                .then(result => {
                    resolve(result);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
};

module.exports = { ...methods };