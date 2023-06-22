const express = require("express");
const app = express();
require("dotenv").config();
app.use(require('./routes'));

const server = app.listen(8080, () =>
{
    let host = (server.address().address == '::') ? 'localhost' : server.address().address;
    let port = server.address().port;
    console.log(`Server is running at http://${host}:${port}`);
    console.log(`${process.env.DB_HOST}`);
});