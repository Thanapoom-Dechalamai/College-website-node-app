const mysql = require('mysql');
require('dotenv').config();
const methods = {
    getImage(role, id)
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
                switch (role)
                {
                    case 1:
                        con.connect((err) =>
                        {
                            if (err) reject(err);
                            con.query(`SELECT student_image FROM ${process.env.DB_TABLE_STUDENT} WHERE student_ID = ${id}`, (error, result, field) =>
                            {
                                if (error) reject(error);
                                console.log(role + "" + id);
                                resolve(result);
                            });

                        });
                        break;
                    case 2:
                        con.connect((err) =>
                        {
                            if (err) reject(err);
                            con.query(`SELECT teacher_image FROM ${process.env.DB_TABLE_TEACHER} WHERE teacher_ID = ${id}`, (error, result, field) =>
                            {
                                if (error) reject(error);
                                resolve(result);
                            });

                        });
                        break;
                }


            } catch (error)
            {
                reject(error);
            }
        });
    }
};

module.exports = { ...methods };