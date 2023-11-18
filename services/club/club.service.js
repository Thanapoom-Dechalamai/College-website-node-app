const db = require("../db.service");
require("dotenv").config();
const { club_columns } = require("../../constants/club/club.constant");

const methods = {
    // Get all //
    getAll() {
        const sqlQuery = `SELECT * FROM ${process.env.DB_TABLE_CLUB}`;
        return db.query(sqlQuery);
    },

    // Create //
    createOne(object) {
        const columns = club_columns;
        const values = columns.map(column => object[column]);
        const placeholders = new Array(values.length).fill("?").join(", ");

        const sqlQuery = `INSERT INTO ${process.env.DB_TABLE_CLUB} (${columns.join(", ")}) VALUES (${placeholders})`;
        return db.query(sqlQuery, values);
    },

    // Update //
    async updateOne(id, object) {
        const allowedColumns = club_columns;
        const columns = [];
        const values = [];

        for (const column of allowedColumns) {
            if (column in object) {
                columns.push(`${column} = ?`);
                values.push(object[column]);
            }
        }

        if (columns.length === 0) {
            return Promise.reject(new Error("No columns to update."));
        }

        const sqlQuery = `UPDATE ${process.env.DB_TABLE_CLUB} SET ${columns.join(", ")} WHERE club_ID = ?`;
        return db.query(sqlQuery, [...values, id]);
    },

    // Delete //
    deleteOne(id) {
        const sqlQuery = `DELETE FROM ${process.env.DB_TABLE_CLUB} WHERE club_ID = ?`;
        return db.query(sqlQuery, [id]);
    }
};

module.exports = { ...methods };