const db = require('./db.service');
require('dotenv').config();

const methods = {
    getAll()
    {
        return new Promise((resolve, reject) =>
        {
            const query = `SELECT * FROM ${process.env.DB_TABLE_DOCUMENT}`;
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
            const query = `SELECT * FROM ${process.env.DB_TABLE_DOCUMENT} WHERE document_ID = ?`;
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
                const columns = ['document_name', 'document_extension', 'document_location', 'document_status'];
                const values = columns.map(column => object[column]);
                const placeholders = new Array(values.length).fill('?').join(', ');
                const sql = `INSERT INTO ${process.env.DB_TABLE_DOCUMENT} (${columns.join(", ")}) VALUES (${placeholders})`;
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
            const allowedcolumns = ['document_name', 'document_extension', 'document_location', 'document_status'];
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

            const query = `UPDATE ${process.env.DB_TABLE_DOCUMENT} SET ${columns.join(", ")} WHERE document_ID = ?`;
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
            const query = `DELETE FROM ${process.env.DB_TABLE_DOCUMENT} WHERE document_ID = ?`;
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