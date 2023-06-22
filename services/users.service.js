const mysql = require('mysql');
require('dotenv').config();
const methods = {
    getAll()
    {
        return new Promise(async (resolve, reject) =>
        {
            try
            {
                let con = mysql.createConnection({
                    host: process.env.DB_HOST,
                    user: process.env.DB_USERNAME,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE
                });
                con.connect((err) =>
                {
                    if (err) reject(err);
                    con.query(`SELECT * FROM ${process.env.DB_TABLE}`, (error, result, field) =>
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