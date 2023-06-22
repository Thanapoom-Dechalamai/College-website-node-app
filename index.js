const express = require("express");
const app = express();
require("dotenv").config();
app.use(require('./routes'));

const server = app.listen(8080, () =>
{
    let port = server.address().port;
    console.log(`Server is running at PORT ${port}`);
});