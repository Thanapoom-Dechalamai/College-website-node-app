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
                const con = mysql.createConnection({
                    host: process.env.DB_HOST,
                    user: process.env.DB_USERNAME,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE
                });
                con.connect((err) =>
                {
                    if (err) reject(err);
                    con.query(`SELECT * FROM ${process.env.DB_TABLE_LEAVE_NOTICE}`, (error, result, field) =>
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
                    con.query(`SELECT * FROM ${process.env.DB_TABLE_LEAVE_NOTICE} WHERE leave_notice_ID = ${id}`, (error, result, field) =>
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
                    let columns = ['leave_notice_student_ID', 'leave_notice_description',
                        'leave_notice_choice', 'leave_notice_start_datetime', 'leave_notice_end_datetime',
                        'leave_notice_create_datetime', 'leave_notice_attached_file',
                        'leave_notice_teacher_ID'],
                        values = [],
                        row = [];
                    for (const element of columns)
                    {
                        row.push(object[element]);
                    }
                    values = [
                        row
                    ];
                    con.query(`INSERT INTO ${process.env.DB_TABLE_LEAVE_NOTICE} (${columns.join(", ")}) VALUES ?`, [values], (error, result, fields) =>
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
                    if (err) reject(err);

                    let allowedcolumns = ['leave_notice_student_ID', 'leave_notice_description',
                        'leave_notice_choice', 'leave_notice_start_datetime', 'leave_notice_end_datetime',
                        'leave_notice_create_datetime', 'leave_notice_attached_file',
                        'leave_notice_teacher_ID', 'leave_notice_teacher_status',
                        'leave_notice_teacher_description', 'leave_notice_teacher_change_datetime',
                        'leave_notice_head_ID', 'leave_notice_head_status', 'leave_notice_head_description',
                        'leave_notice_head_change_datetime'], //all columns that can be updated
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

                    con.query(`UPDATE ${process.env.DB_TABLE_LEAVE_NOTICE} SET ${columns.join(", ")} WHERE leave_notice_ID = ${id}`, values, (err, result) =>
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
                    con.query(`DELETE FROM ${process.env.DB_TABLE_LEAVE_NOTICE} WHERE leave_notice_ID = '${id}'`, (error, result, fields) =>
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