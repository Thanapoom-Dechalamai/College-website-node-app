const mysql = require('mysql');

const methods = {
    getAll()
    {
        return new Promise(async (resolve, reject) =>
        {
            try
            {
                let con = mysql.createConnection({
                    host: 'localhost',
                    user: 'root',
                    password: '',
                    database: 'devdb'
                });
                con.connect((err) =>
                {
                    if (err) reject(err);
                    con.query('SELECT * FROM users', (error, result, field) =>
                    {
                        if (error) reject(error);
                        console.log(`result: ${result}`);
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