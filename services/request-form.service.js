const db = require('./db.service');
require('dotenv').config();

const methods = {
    getAll()
    {
        return new Promise((resolve, reject) =>
        {
            const query = `SELECT * FROM ${process.env.DB_TABLE_REQUEST_FORM}`;
            db.query(query)
                .then(result =>
                {
                    resolve(result);
                })
                .catch(error =>
                {
                    reject(error);
                });
        });
    },
    getOne(id)
    {
        return new Promise((resolve, reject) =>
        {
            const query = `SELECT * FROM ${process.env.DB_TABLE_REQUEST_FORM} WHERE request_form_ID = ?`;
            db.query(query, [id])
                .then(result =>
                {
                    resolve(result);
                })
                .catch(error =>
                {
                    reject(error);
                });
        });
    },
    addOne(object)
    {
        return new Promise(async (resolve, reject) =>
        {
            try
            {
                const columns = ['request_form_student_ID', 'request_form_create_datetime', 'request_form_document', 'request_form_attached_file'];
                const values = columns.map(column => object[column]);
                const placeholders = new Array(values.length).fill('?').join(', ');
                const sql = `INSERT INTO ${process.env.DB_TABLE_REQUEST_FORM} (${columns.join(", ")}) VALUES (${placeholders})`;
                console.log(values);
                const results = await db.query(sql, values);
                resolve(results);
            } catch (error)
            {
                reject(error);
            }
        });
    },

    updateAt(id, object)
    {
        return new Promise((resolve, reject) =>
        {
            const allowedcolumns = ['request_form_teacher_ID', 'request_form_teacher_status', 'request_form_teacher_description', 'request_form_teacher_change_datetime', 'request_form_head_ID', 'request_form_head_status', 'request_form_head_description', 'request_form_head_description'];
            const columns = [];
            const values = [];

            for (const c of allowedcolumns)
            {
                if (c in object)
                {
                    columns.push(`${c} = ?`);
                    values.push(object[c]);
                }
            }

            if (columns.length === 0)
            {
                return reject('No columns to update.');
            }

            const query = `UPDATE ${process.env.DB_TABLE_REQUEST_FORM} SET ${columns.join(", ")} WHERE request_form_ID = ?`;
            db.query(query, [...values, id])
                .then(result =>
                {
                    resolve(result);
                })
                .catch(error =>
                {
                    reject(error);
                });
        });
    },

    removeAt(id)
    {
        return new Promise((resolve, reject) =>
        {
            const query = `DELETE FROM ${process.env.DB_TABLE_REQUEST_FORM} WHERE request_form_ID = ?`;
            db.query(query, [id])
                .then(result =>
                {
                    resolve(result);
                })
                .catch(error =>
                {
                    reject(error);
                });
        });
    }
};

module.exports = { ...methods };