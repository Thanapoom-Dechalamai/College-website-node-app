const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const config = require('../configs/app');
require('dotenv').config();
const db = require('./db.service');

const methods = {
    login(email, password)
    {
        return new Promise((resolve, reject) =>
        {
            const columns = ['user_role', 'user_role_id', 'user_password'];
            const query = `SELECT ${columns.join(', ')} FROM ${process.env.DB_TABLE_USER} WHERE user_email = ?`;

            db.query(query, [email])
                .then(result =>
                {
                    if (result?.length === 1)
                    {
                        console.log(result);
                        const passwordIsValid = bcrypt.compareSync(password, result[0].user_password);
                        if (!passwordIsValid)
                        {
                            reject('Invalid Password!');
                        }
                        const token = jwt.sign(
                            { user_role: result[0].user_role, user_role_id: result[0].user_role_id },
                            config.secret,
                            {
                                algorithm: 'HS256',
                                allowInsecureKeySizes: true,
                                expiresIn: 86400, // 24 hours
                            }
                        );
                        resolve(token);
                    } else
                    {
                        reject("Email not found.");
                    }
                })
                .catch(error =>
                {
                    reject(error);
                });
        });
    },
};

module.exports = { ...methods };