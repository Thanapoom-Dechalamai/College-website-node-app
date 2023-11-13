const fs = require("fs");

const method = {
    async onGetExample(req, res) {
        const data = fs.readFileSync("schema.json", "utf8");
        res.send({
            staus: true,
            result: JSON.parse(data)
        });
    }
};

module.exports = { ...method };