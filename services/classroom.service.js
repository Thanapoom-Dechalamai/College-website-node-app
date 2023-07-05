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
    }
};

module.exports = { ...methods };