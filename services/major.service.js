const db = require('./db.service');

const methods = {
    getAll()
    {
        return new Promise(async (resolve, reject) =>
        {
            try
            {
                const sql = `SELECT * FROM ${process.env.DB_TABLE_MAJOR}`;
                const results = await db.query(sql);
                resolve(results);
            } catch (error)
            {
                reject(error);
            }
        });
    }
};

module.exports = { ...methods };
