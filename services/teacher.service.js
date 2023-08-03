const mysql = require('mysql');
require('dotenv').config();
const methods = {
    getOne(id)
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
                const con = mysql.createConnection({
                    host: process.env.DB_HOST,
                    user: process.env.DB_USERNAME,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE
                });
                con.connect((err) =>
                {
                    if (err) reject(err);
                    const column = ['primary_teacher_ID', 'teacher_ID', 'teacher_position', 'teacher_first_name',
                        'teacher_last_name', 'teacher_nickname', 'teacher_first_name_thai', 'teacher_last_name_thai', 'teacher_nickname_thai',
                        'teacher_gender', 'teacher_major', 'teacher_phone', 'teacher_line_ID', 'teacher_image',
                        'teacher_email'];
                    con.query(`SELECT ${column.join(', ')} FROM ${process.env.DB_TABLE_TEACHER} WHERE teacher_ID = ${id}`, (error, result, field) =>
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
                const con = mysql.createConnection({
                    host: process.env.DB_HOST,
                    user: process.env.DB_USERNAME,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE
                });
                con.connect((err) =>
                {
                    if (err) reject(err);
                    const column = ['primary_teacher_ID', 'teacher_ID', 'teacher_position', 'teacher_first_name',
                        'teacher_last_name', 'teacher_nickname', 'teacher_first_name_thai', 'teacher_last_name_thai', 'teacher_nickname_thai',
                        'teacher_gender', 'teacher_major', 'teacher_phone', 'teacher_line_ID', 'teacher_image',
                        'teacher_email'];
                    con.query(`SELECT ${column.join(', ')} FROM ${process.env.DB_TABLE_TEACHER}`, (error, result, field) =>
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
                    if (err) reject(err);

                    let columns = ['teacher_ID', 'teacher_position', 'teacher_first_name',
                        'teacher_last_name', 'teacher_nickname', 'teacher_first_name_thai', 'teacher_last_name_thai', 'teacher_nickname_thai',
                        'teacher_gender', 'teacher_major', 'teacher_phone', 'teacher_line_ID', 'teacher_image',
                        'teacher_email'],
                        values = [],
                        row = [];
                    for (const element of columns)
                    {
                        row.push(object[element]);
                    }
                    values = [
                        row
                    ];
                    con.query(`INSERT INTO ${process.env.DB_TABLE_TEACHER} (${columns.join(", ")}) VALUES ?`, [values], (error, result, fields) =>
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

                    let allowedcolumns = ['teacher_ID', 'teacher_position', 'teacher_first_name',
                        'teacher_last_name', 'teacher_nickname', 'teacher_first_name_thai', 'teacher_last_name_thai', 'teacher_nickname_thai',
                        'teacher_gender', 'teacher_major', 'teacher_phone', 'student_line_ID', 'teacher_image',
                        'teacher_email'], //all columns that can be updated
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

                    con.query(`UPDATE ${process.env.DB_TABLE_TEACHER} SET ${columns.join(", ")} WHERE primary_teacher_ID = ${id}`, values, (err, result) =>
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
                    if (err) reject(err);
                    con.query(`DELETE FROM ${process.env.DB_TABLE_TEACHER} WHERE primary_teacher_ID = '${id}'`, (error, result, fields) =>
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