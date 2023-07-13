const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const config = require('../configs/app');
require('dotenv').config();
const methods = {
    login(email, password)
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
                let columns = ['primary_student_id', 'student_password'];
                con.connect((err) =>
                {
                    if (err) reject(err);
                    con.query(`SELECT ${columns.join(', ')} FROM ${process.env.DB_TABLE_STUDENT} WHERE student_email = '${email}'`, (error, result, field) =>
                    {
                        if (error) reject(error);
                        if (result?.length == 1)
                        {
                            console.log(result);
                            let passwordIsValid = bcrypt.compareSync(password, result[0].student_password);
                            if (!passwordIsValid)
                            {
                                reject('Invalid Password!');
                            }
                            const token = jwt.sign({ primary_student_id: result[0].primary_student_id }, config.secret,
                                {
                                    algorithm: 'HS256',
                                    allowInsecureKeySizes: true,
                                    expiresIn: 86400, // 24 hours
                                });

                            resolve(token);
                        } else
                        {
                            reject("Email not found.");
                        }
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