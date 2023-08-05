const db = require('./db.service');
require('dotenv').config();

const methods = {
    getAll()
    {
        return new Promise((resolve, reject) =>
        {
            const query = `SELECT * FROM ${process.env.DB_TABLE_CLASSROOM}`;
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

    getClassByLevel(level)
    {
        return new Promise((resolve, reject) =>
        {
            const query = `SELECT classroom_class, classroom_major FROM ${process.env.DB_TABLE_CLASSROOM} WHERE classroom_level = ?`;
            db.query(query, [level])
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

    getClassByTeacher(id)
    {
        return new Promise((resolve, reject) =>
        {
            const query = `SELECT * FROM ${process.env.DB_TABLE_CLASSROOM} WHERE classroom_homeroom_teacher = ?`;
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

    updateAt(id, object)
    {
        return new Promise((resolve, reject) =>
        {
            const allowedcolumns = ['classroom_major', 'classroom_level', 'classroom_class', 'classroom_homeroom_teacher'];
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

            const query = `UPDATE ${process.env.DB_TABLE_CLASSROOM} SET ${columns.join(", ")} WHERE classroom_ID = ?`;
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
            const query = `DELETE FROM ${process.env.DB_TABLE_CLASSROOM} WHERE classroom_ID = ?`;
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