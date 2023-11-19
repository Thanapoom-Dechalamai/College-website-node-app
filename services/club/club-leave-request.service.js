const dayjs = require("dayjs");
const db = require("../db.service");
require("dotenv").config();

const methods = {
    // Get all //
    getAll() {
        const sqlQuery = `SELECT * FROM ${process.env.DB_TABLE_CLUB_LEAVE_REQUEST}`
        return db.query(sqlQuery);
    },

    // Create //
    createOne(object) {
        object.club_leave_request_create_datetime = dayjs().toISOString();

        const columns = ["club_leave_request_status", "club_leave_request_club_ID", "club_leave_request_student_ID", "club_leave_request_create_datetime"];
        const values = columns.map(column => object[column]);
        const placeholders = new Array(values.length).fill("?").join(", ");

        const sqlQuery = `INSERT INTO ${process.env.DB_TABLE_CLUB_LEAVE_REQUEST} (${columns.join(", ")}) VALUES (${placeholders})`;
        return db.query(sqlQuery, values);
    },

    // Update //
    async updateOne(id, object) {
        object.club_leave_request_status_change_datetime = dayjs().toISOString();

        const allowedColumns = ["club_leave_request_status", "club_leave_request_status_change_datetime"];
        const columns = [];
        const values = [];

        for (const column of allowedColumns) {
            if (column in object) {
                columns.push(`${column} = ?`);
                values.push(object[column])
            }
        }

        if (columns.length === 0) {
            return Promise.reject(new Error("No columns to update."));
        }

        const sqlQuery = `UPDATE ${process.env.DB_TABLE_CLUB_LEAVE_REQUEST} SET ${columns.join(", ")} WHERE club_leave_request_ID = ?`;
        return db.query(sqlQuery, [...values, id]);
    },

    // Delete //
    deleteOne(id) {
        const sqlQuery = `DELETE FROM ${process.env.DB_TABLE_CLUB_LEAVE_REQUEST} WHERE club_leave_request_ID = ?`;
        return db.query(sqlQuery, [id]);
    }
}

module.exports = { ...methods };