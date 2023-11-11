const db = require("./db.service");
require("dotenv").config();

const methods = {
    // Get all //
    getAll() {
        const columns = ["primary_student_ID", "student_ID", "student_position", "student_first_name",
            "student_last_name", "student_nickname", "student_first_name_thai", "student_last_name_thai", "student_nickname_thai",
            "student_gender", "student_major", "student_level", "student_class", "student_phone", "student_line_ID", "student_image",
            "student_email"];

        const sqlQuery = `SELECT ${columns.join(", ")} FROM ${process.env.DB_TABLE_STUDENT}`;
        return db.query(sqlQuery);
    },
    // Get all (Only names) //
    getInfo() {
        const columns = ["student_ID", "student_first_name",
            "student_last_name", "student_first_name_thai", "student_last_name_thai"];

        const sqlQuery = `SELECT ${columns.join(", ")} FROM ${process.env.DB_TABLE_STUDENT}`;
        return db.query(sqlQuery);
    },
    // Get one //
    getOne(id) {
        const columns = ["primary_student_ID", "student_ID", "student_position", "student_first_name",
            "student_last_name", "student_nickname", "student_first_name_thai", "student_last_name_thai", "student_nickname_thai",
            "student_gender", "student_major", "student_level", "student_class", "student_phone", "student_line_ID", "student_image",
            "student_email"];

        const sqlQuery = `SELECT ${columns.join(", ")} FROM ${process.env.DB_TABLE_STUDENT} WHERE student_ID = ${id}`;
        return db.query(sqlQuery);
    },
    // Get by given amount //
    getByAmount(major, amount) {
        const columns = ["primary_student_ID", "student_ID", "student_position", "student_first_name",
            "student_last_name", "student_nickname", "student_first_name_thai", "student_last_name_thai", "student_nickname_thai",
            "student_gender", "student_major", "student_level", "student_class", "student_phone", "student_line_ID", "student_image",
            "student_email"];
        const sqlQuery = `SELECT ${columns.join(", ")} FROM ${process.env.DB_TABLE_STUDENT} WHERE student_major = ${major} ORDER BY student_ID LIMIT ${amount}`;
        return db.query(sqlQuery);
    },
    // Get by class //
    getByClass(level, classes) {
        const columns = ["primary_student_ID", "student_ID", "student_position", "student_first_name",
            "student_last_name", "student_nickname", "student_first_name_thai", "student_last_name_thai", "student_nickname_thai",
            "student_gender", "student_major", "student_level", "student_class", "student_phone", "student_line_ID", "student_image",
            "student_email"];

        const sqlQuery = `SELECT ${columns.join(", ")} FROM ${process.env.DB_TABLE_STUDENT} WHERE student_level = ${level} && student_class = ${classes}`;
        return db.query(sqlQuery);
    },

    // Create //
    async createOne(object) {
        const columns = [
            "student_ID", "student_position", "student_first_name", "student_last_name",
            "student_nickname", "student_first_name_thai", "student_last_name_thai", "student_nickname_thai",
            "student_gender", "student_major", "student_level", "student_class",
            "student_phone", "student_line_ID", "student_image", "student_email"
        ];
        const values = columns.map((element) => {
            if (object[element] === null) {
                reject("You have a missing field");
            }
            return object[element];
        });

        const email = object["student_email"];
        const emailIsValid = (await db.query(`SELECT student_email FROM ${process.env.DB_TABLE_STUDENT} WHERE student_email = ?`, [email])).length === 0;
        if (emailIsValid) {
            const sqlQuery = `INSERT INTO ${process.env.DB_TABLE_STUDENT} (${columns.join(", ")}) VALUES (${columns.map(() => "?").join(", ")})`
            return db.query(sqlQuery, values)
        } else {
            reject("The email is already in use");
        }
    },

    // Update //
    updateOne(id, object) {
        const allowedColumns = ["student_ID", "student_position", "student_first_name",
            "student_last_name", "student_nickname", "student_first_name_thai", "student_last_name_thai", "student_nickname_thai",
            "student_gender", "student_major", "student_level", "student_class", "student_phone", "student_line_ID", "student_image",
            "student_email"];
        let columns = [];
        let values = [];

        for (let column of allowedColumns) {
            if (column in object) {
                columns.push(`${column} = ?`);
                values.push(object[column]);
            }
        };

        if (columns.length === 0) {
            return res.sendStatus(204);
        }

        const updateColumns = columns.join(", ");

        const sqlQuery = `UPDATE ${process.env.DB_TABLE_STUDENT} SET ${updateColumns} WHERE primary_student_ID = ?`;
        return db.query(sqlQuery, [...values, id]);
    },

    // Delete //
    deleteOne(id) {
        const sqlQuery = `DELETE FROM ${process.env.DB_TABLE_STUDENT} WHERE primary_student_ID = ?`;
        return db.query(sqlQuery, [id]);
    }
};

module.exports = { ...methods };