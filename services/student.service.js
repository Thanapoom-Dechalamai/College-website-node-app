const mysql = require('mysql');
const bcrypt = require('bcryptjs');
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
                    con.query(`SELECT ${columns.join(', ')} FROM ${process.env.DB_TABLE_STUDENT} WHERE student_ID = ${id}`, (error, result, field) =>
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
    }, getAll()
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
    getByAmount(major, amount)
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
                    con.query(`SELECT ${columns.join(', ')} FROM ${process.env.DB_TABLE_STUDENT} WHERE student_major = ${major} ORDER BY student_ID LIMIT ${amount}`, (error, result, field) =>
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
    getByClass(level, classes)
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
                    con.query(`SELECT ${columns.join(', ')} FROM ${process.env.DB_TABLE_STUDENT} WHERE student_level = ${level} && student_class = ${classes}`, (error, result, field) =>
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
                    console.log(object['student_email']);
                    con.query(`SELECT student_email FROM ${process.env.DB_TABLE_STUDENT} WHERE student_email = '${object['student_email']}'`, async (error, result, fields) =>
                    {
                        if (error) reject(error);
                        console.log(result);
                        if (result?.length > 0)
                        {
                            reject('That email is already in use');
                        } else
                        {
                            let columns = ['student_ID', 'student_position', 'student_first_name',
                                'student_last_name', 'student_nickname', 'student_first_name_thai', 'student_last_name_thai', 'student_nickname_thai',
                                'student_gender', 'student_major', 'student_level', 'student_class', 'student_phone', 'student_line_ID', 'student_image',
                                'student_email', 'student_password'],
                                values = [],
                                row = [];
                            object['student_password'] = await bcrypt.hash(object['student_password'], 12);
                            console.log(object['student_password']);
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
                        }


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
                    if (err) reject(err);
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