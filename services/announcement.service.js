const dayjs = require("dayjs");
const db = require("./db.service");
require("dotenv").config();

const methods = {
    // Get all //
    getAll() {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM ${process.env.DB_TABLE_ANNOUNCEMENT}`;
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
            const query = `SELECT * FROM ${process.env.DB_TABLE_ANNOUNCEMENT} WHERE announcement_ID = ?`;
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
                object.announcement_create_datetime = dayjs().toISOString();

                const columns = ["announcement_status", "announcement_title", "announcement_description", "announcement_image", "announcement_create_datetime"];
                const values = columns.map(column => object[column]);
                const placeholders = new Array(values.length).fill("?").join(", ");

                const sqlQuery = `INSERT INTO ${process.env.DB_TABLE_ANNOUNCEMENT} (${columns.join(", ")}) VALUES (${placeholders})`;

                const results = await db.query(sqlQuery, values);
                resolve(results);
            } catch (error) {
                reject(error);
            }
        });
    },

    // Update //
    updateOne(id, object) {
        return new Promise((resolve, reject) => {
            const allowedColumns = ["announcement_status", "announcement_title", "announcement_description", "announcement_image"];
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

            const query = `UPDATE ${process.env.DB_TABLE_ANNOUNCEMENT} SET ${columns.join(", ")} WHERE announcement_ID = ?`;
            db.query(query, [...values, id])
                .then(result => {
                    resolve(result);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },

    // Delete //
    deleteOne(id) {
        return new Promise((resolve, reject) => {
            const query = `DELETE FROM ${process.env.DB_TABLE_ANNOUNCEMENT} WHERE announcement_ID = ?`;
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