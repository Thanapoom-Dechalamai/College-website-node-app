
const fs = require('fs');
const method = {
    async onGetExample(req, res)
    {
        const data = fs.readFileSync('schema.json', 'utf8');
        res.send(data);
    }
};

module.exports = { ...method };