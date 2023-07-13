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
                    con.query(`SELECT * FROM ${process.env.DB_TABLE_CLASSROOM}`, (error, result, field) =>
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
    getClassByLevel(level)
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
                    con.query(`SELECT classroom_class, classroom_major FROM ${process.env.DB_TABLE_CLASSROOM} WHERE classroom_level = ${level}`, (error, result, field) =>
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
    getClassByTeacher(id)
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
                    con.query(`SELECT * FROM ${process.env.DB_TABLE_CLASSROOM} WHERE classroom_homeroom_teacher = ${id}`, (error, result, field) =>
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

                    let allowedcolumns = ['classroom_major', 'classroom_level', 'classroom_class', 'classroom_homeroom_teacher'], //all columns that can be updated
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

                    con.query(`UPDATE ${process.env.DB_TABLE_CLASSROOM} SET ${columns.join(", ")} WHERE classroom_ID = ${id}`, values, (err, result) =>
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
                    con.query(`DELETE FROM ${process.env.DB_TABLE_CLASSROOM} WHERE classroom_ID = '${id}'`, (error, result, fields) =>
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