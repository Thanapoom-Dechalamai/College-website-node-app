const db = require('./db.service');
require('dotenv').config();

const methods = {
    getAll()
    {
        return new Promise((resolve, reject) =>
        {
            const query = `SELECT * FROM ${process.env.DB_TABLE_CLUB}`;
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
            const query = `SELECT * FROM ${process.env.DB_TABLE_CLUB} WHERE club_ID = ?`;
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
                const columns = ['club_name', 'club_major', 'club_teacher', 'club_description', 'club_image', 'club_status', 'club_capacity'];
                const values = columns.map(column => object[column]);
                const placeholders = new Array(values.length).fill('?').join(', ');
                const sql = `INSERT INTO ${process.env.DB_TABLE_CLUB} (${columns.join(", ")}) VALUES (${placeholders})`;
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
            const allowedcolumns = ['club_name', 'club_major', 'club_teacher', 'club_description', 'club_image', 'club_status', 'club_capacity'];
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

            const query = `UPDATE ${process.env.DB_TABLE_CLUB} SET ${columns.join(", ")} WHERE club_ID = ?`;
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
            const query = `DELETE FROM ${process.env.DB_TABLE_CLUB} WHERE club_ID = ?`;
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