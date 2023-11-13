const db = require("../db.service");
require("dotenv").config();

const methods = {
    // Get all //
    getAll() {
        return db.query(`SELECT * FROM ${process.env.DB_TABLE_CLUB_MEMBERSHIP}`);
    },

    // Create //
    createOne(object) {
        const columns = ["club_membership_club_ID", "club_membership_student_ID"];
        const values = columns.map(column => object[column]);
        const placeholders = new Array(values.length).fill("?").join(", ");

        const sql = `INSERT INTO ${process.env.DB_TABLE_CLUB_MEMBERSHIP} (${columns.join(", ")}) VALUES (${placeholders})`;

        return db.query(sql, values);
    },

    // Update //
    async updateOne(id, object) {
        const allowedColumns = ["club_membership_club_ID", "club_membership_student_ID"];
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

        const query = `UPDATE ${process.env.DB_TABLE_CLUB_MEMBERSHIP} SET ${columns.join(", ")} WHERE club_membership_ID = ?`;
        return db.query(query, [...values, id]);
    },

    // Delete //
    deleteOne(id) {
        const query = `DELETE FROM ${process.env.DB_TABLE_CLUB_MEMBERSHIP} WHERE club_membership_ID = ?`;
        return db.query(query, [id]);
    }
};

module.exports = { ...methods };