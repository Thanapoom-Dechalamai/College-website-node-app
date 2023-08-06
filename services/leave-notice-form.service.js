const db = require('./db.service');

const methods = {
    getAll()
    {
        return new Promise(async (resolve, reject) =>
        {
            try
            {
                const sql = `SELECT * FROM ${process.env.DB_TABLE_LEAVE_NOTICE}`;
                const results = await db.query(sql);
                resolve(results);
            } catch (error)
            {
                reject(error);
            }
        });
    },
    getOne(id)
    {
        return new Promise(async (resolve, reject) =>
        {
            try
            {
                const sql = `SELECT * FROM ${process.env.DB_TABLE_LEAVE_NOTICE} WHERE leave_notice_ID = ?`;
                const results = await db.query(sql, [id]);
                resolve(results);
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
                const columns = ['leave_notice_student_ID', 'leave_notice_description', 'leave_notice_choice', 'leave_notice_start_datetime', 'leave_notice_end_datetime', 'leave_notice_create_datetime', 'leave_notice_attached_file', 'leave_notice_teacher_ID'];
                const values = columns.map(column => object[column]);
                const placeholders = new Array(values.length).fill('?').join(', ');
                const sql = `INSERT INTO ${process.env.DB_TABLE_LEAVE_NOTICE} (${columns.join(", ")}) VALUES (${placeholders})`;
                console.log(values);
                const results = await db.query(sql, values);
                resolve(results);
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
                const allowedcolumns = ['leave_notice_student_ID', 'leave_notice_description', 'leave_notice_choice', 'leave_notice_start_datetime', 'leave_notice_end_datetime', 'leave_notice_create_datetime', 'leave_notice_attached_file', 'leave_notice_teacher_ID', 'leave_notice_teacher_status', 'leave_notice_teacher_description', 'leave_notice_teacher_change_datetime', 'leave_notice_head_ID', 'leave_notice_head_status', 'leave_notice_head_description', 'leave_notice_head_change_datetime'];
                const columns = [];
                const values = [];
                for (const c of allowedcolumns)
                {
                    if (c in object)
                    {
                        columns.push(`${c} = ?`);
                        values.push(object[c]);
                    }
                }
                if (columns.length == 0)
                {
                    return res.sendStatus(204);
                }
                const sql = `UPDATE ${process.env.DB_TABLE_LEAVE_NOTICE} SET ${columns.join(", ")} WHERE leave_notice_ID = ?`;
                values.push(id);
                const results = await db.query(sql, values);
                resolve(results);
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
                const sql = `DELETE FROM ${process.env.DB_TABLE_LEAVE_NOTICE} WHERE leave_notice_ID = ?`;
                const results = await db.query(sql, [id]);
                resolve(results);
            } catch (error)
            {
                reject(error);
            }
        });
    }
};

module.exports = { ...methods };
