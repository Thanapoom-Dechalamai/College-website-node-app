const db = require("./db.service");
require("dotenv").config();

const methods = {
    // Get all //
    getAll() {
        return new Promise(async (resolve, reject) => {
            try {
                const column = ["primary_teacher_ID", "teacher_ID", "teacher_position", "teacher_first_name",
                    "teacher_last_name", "teacher_nickname", "teacher_first_name_thai", "teacher_last_name_thai", "teacher_nickname_thai",
                    "teacher_gender", "teacher_major", "teacher_phone", "teacher_line_ID", "teacher_image",
                    "teacher_email"];

                const result = await db.query(`SELECT ${column.join(", ")} FROM ${process.env.DB_TABLE_TEACHER}`);
                resolve(result);

            } catch (error) {
                reject(error);
            }
        });
    },
    // Get one //
    getOne(id) {
        const column = ["primary_teacher_ID", "teacher_ID", "teacher_position", "teacher_first_name",
            "teacher_last_name", "teacher_nickname", "teacher_first_name_thai", "teacher_last_name_thai", "teacher_nickname_thai",
            "teacher_gender", "teacher_major", "teacher_phone", "teacher_line_ID", "teacher_image",
            "teacher_email"];

        const sqlQuery = `SELECT ${column.join(", ")} FROM ${process.env.DB_TABLE_TEACHER} WHERE teacher_ID = ?`;
        return db.query(sqlQuery, [id]);
    },

    // Create //
    async createOne(object) {
        const columns = ["teacher_ID", "teacher_position", "teacher_first_name",
            "teacher_last_name", "teacher_nickname", "teacher_first_name_thai", "teacher_last_name_thai", "teacher_nickname_thai",
            "teacher_gender", "teacher_major", "teacher_phone", "teacher_line_ID", "teacher_image",
            "teacher_email"];
        const values = columns.map((element) => {
            if (object[element] == null) {
                reject("You have a missing field");
            }
            return object[element];
        });

        const email = object["teacher_email"];
        const emailIsValid = (await db.query(`SELECT teacher_email FROM ${process.env.DB_TABLE_TEACHER} WHERE teacher_email = ?`, [email])).length === 0;
        if (emailIsValid) {
            const sqlQuery = `INSERT INTO ${process.env.DB_TABLE_TEACHER} (${columns.join(", ")}) VALUES (${columns.map(() => "?").join(", ")})`;
            return db.query(sqlQuery, values);
        } else {
            reject("The email is already in use");
        }
    },

    // Update //
    updateOne(id, object) {
        const allowedColumns = ["teacher_ID", "teacher_position", "teacher_first_name",
            "teacher_last_name", "teacher_nickname", "teacher_first_name_thai", "teacher_last_name_thai", "teacher_nickname_thai",
            "teacher_gender", "teacher_major", "teacher_phone", "student_line_ID", "teacher_image",
            "teacher_email"];
        let columns = [];
        let values = [];

        for (let column of allowedColumns) {
            if (column in object) {
                columns.push(`${column} = ?`);
                values.push(object[column]);
            }
        }

        if (columns.length === 0) {
            return res.sendStatus(204);
        }

        const updateColumns = columns.join(", ");

        const sqlQuery = `UPDATE ${process.env.DB_TABLE_TEACHER} SET ${updateColumns} WHERE primary_teacher_ID = ?`;
        return db.query(sqlQuery, [...values, id]);
    },

    // Delete //
    deleteOne(id) {
        const sqlQuery = `DELETE FROM ${process.env.DB_TABLE_TEACHER} WHERE primary_teacher_ID = ?`;
        return db.query(sqlQuery, [id]);
    }
};

module.exports = { ...methods };