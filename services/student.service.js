const mysql = require('mysql');
require('dotenv').config();
const methods = {
    getAll()
    {
        return new Promise(async (resolve, reject) =>
        {
            try
            {
                console.log({
                    host: process.env.DB_HOST,
                    user: process.env.DB_USERNAME,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE
                });
                let con = mysql.createConnection({
                    host: process.env.DB_HOST,
                    user: process.env.DB_USERNAME,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE
                });
                let columns = ['primary_student_ID', 'student_ID', 'student_first_name',
                    'student_last_name', 'student_nickname', 'student_first_name_thai', 'student_last_name_thai', 'student_nickname_thai',
                    'student_major', 'student_level', 'student_class', 'student_phone', 'student_line_ID', 'student_image',
                    'student_email'];
                con.connect((err) =>
                {
                    if (err) reject(err);
                    con.query(`SELECT ${columns.join(', ')} FROM ${process.env.DB_TABLE_STUDENT}`, (error, result, field) =>
                    {
                        if (error) reject(error);
                        resolve(result);
                    });

                });

            } catch (error)
            {
                reject(error);
            }
        });
    },
    addOne(object)
    {
        return new Promise(async (resolve, reject) =>
        {
            try
            {
                const con = mysql.createConnection({
                    host: process.env.DB_HOST,
                    user: process.env.DB_USERNAME,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE
                });
                con.connect(function (err)
                {
                    if (err) reject(error);

                    let columns = ['student_ID', 'student_position', 'student_first_name',
                        'student_last_name', 'student_nickname', 'student_first_name_thai', 'student_last_name_thai', 'student_nickname_thai',
                        'student_gender', 'student_major', 'student_level', 'student_class', 'student_phone', 'student_line_ID', 'student_image',
                        'student_email', 'student_password'],
                        values = [],
                        row = [];
                    for (const element of columns)
                    {
                        row.push(object[element]);
                    }
                    values = [
                        row
                    ];
                    con.query(`INSERT INTO ${process.env.DB_TABLE_STUDENT} (${columns.join(", ")}) VALUES ?`, [values], (error, result, fields) =>
                    {
                        if (error) reject(error);
                        resolve(result);
                    });

                });
            } catch (error)
            {
                reject(error);
            }

        });
    },
    updateAt(id, object)
    {
        return new Promise(async (resolve, reject) =>
        {
            try
            {
                const con = mysql.createConnection({
                    host: process.env.DB_HOST,
                    user: process.env.DB_USERNAME,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE
                });
                con.connect(function (err)
                {
                    if (err) reject(error);

                    let allowedcolumns = ['student_ID', 'student_position', 'student_first_name',
                        'student_last_name', 'student_nickname', 'student_first_name_thai', 'student_last_name_thai', 'student_nickname_thai',
                        'student_gender', 'student_major', 'student_level', 'student_class', 'student_phone', 'student_line_ID', 'student_image',
                        'student_email', 'student_password'], //all columns that can be updated
                        columns = [],
                        values = [];

                    for (let c of allowedcolumns)
                    {
                        if (c in object)
                        {  //check if there is a value for that column in the request body
                            columns.push(`${c} = ?`),
                                values.push(object[c]);
                        }
                    }

                    if (columns.length == 0)
                    {
                        return res.sendStatus(204);
                    }

                    con.query(`UPDATE ${process.env.DB_TABLE_STUDENT} SET ${columns.join(", ")} WHERE primary_student_ID = ${id}`, values, (err, result) =>
                    {
                        if (err)
                        {
                            console.log("err" + err);
                            reject(err);
                        } else
                        {
                            resolve(result);
                        }
                    });

                });
            } catch (error)
            {
                reject(error);
            }

        });
    },
    removeAt(id)
    {
        return new Promise(async (resolve, reject) =>
        {
            try
            {
                const con = mysql.createConnection({
                    host: process.env.DB_HOST,
                    user: process.env.DB_USERNAME,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE
                });
                con.connect(function (err)
                {
                    if (err) reject(error);
                    con.query(`DELETE FROM ${process.env.DB_TABLE_STUDENT} WHERE primary_student_ID = '${id}'`, (error, result, fields) =>
                    {
                        if (error) reject(error);
                        resolve(result);
                    });

                });
            } catch (error)
            {
                reject(error);
            }

        });
    }
};

module.exports = { ...methods };