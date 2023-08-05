const db = require('./db.service');
require('dotenv').config();
const methods = {
    getImage(role, id)
    {
        return new Promise(async (resolve, reject) =>
        {
            try
            {
                let result;
                switch (role)
                {
                    case 1:
                        result = await db.query(`SELECT student_image FROM ${process.env.DB_TABLE_STUDENT} WHERE student_ID = ?`, [id]);
                        resolve(result);
                        break;
                    case 2:
                        result = await db.query(`SELECT teacher_image FROM ${process.env.DB_TABLE_TEACHER} WHERE teacher_ID = ?`, [id]);
                        resolve(result);
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