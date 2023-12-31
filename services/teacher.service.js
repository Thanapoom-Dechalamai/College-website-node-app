const db = require("./db.service");
require("dotenv").config();
const { teacher_primary_columns, teacher_names_columns, teacher_basic_columns, teacher_contacts_columns } = require("../constants/teacher.constant");

const allColumns = teacher_primary_columns.concat(teacher_names_columns, teacher_basic_columns, teacher_contacts_columns);

const methods = {
    // Get all //
    getAll() {
        return new Promise(async (resolve, reject) => {
            try {
                const column = ["primary_teacher_ID", ...allColumns];

                const result = await db.query(`SELECT ${column.join(", ")} FROM ${process.env.DB_TABLE_TEACHER}`);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    },
    // Get one //
    getOne(id) {
        return new Promise(async (resolve, reject) => {
            try {

                const column = ["primary_teacher_ID", ...allColumns];

                const result = await db.query(`SELECT ${column.join(", ")} FROM ${process.env.DB_TABLE_TEACHER} WHERE teacher_ID = ${id}`);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    },

    // Create //
    createOne(object) {
        return new Promise(async (resolve, reject) => {
            try {
                let columns = allColumns;

                const row = columns.map((element) => {
                    if (object[element] == null) {
                        reject("You have a missing field");
                    }
                    return object[element];
                });

                const email = object["teacher_email"];
                const emailIsValid = (await db.query(`SELECT teacher_email FROM ${process.env.DB_TABLE_TEACHER} WHERE teacher_email = ?`, [email])).length === 0;

                if (emailIsValid) {
                    const result = await db.query(`INSERT INTO ${process.env.DB_TABLE_TEACHER} (${columns.join(", ")}) VALUES (${columns.map(() => "?").join(", ")})`, row);
                    resolve(result);
                } else {
                    reject("That email is already in use");
                }
            } catch (error) {
                reject(error);
            }

        });
    },

    // Update //
    updateOne(id, object) {
        return new Promise(async (resolve, reject) => {
            try {
                let allowedColumns = allColumns;

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
                const result = await db.query(`UPDATE ${process.env.DB_TABLE_TEACHER} SET ${updateColumns} WHERE primary_teacher_ID = ?`, [...values, id]);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    },

    // Delete //
    deleteOne(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await db.query(`DELETE FROM ${process.env.DB_TABLE_TEACHER} WHERE primary_teacher_ID = ?`, [id]);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }
};

module.exports = { ...methods };