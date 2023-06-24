const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(require('./routes'));

const server = app.listen(process.env.SERVER_PORT, () =>
{
    let port = server.address().port;
    console.log(`Server is running at PORT ${port}`);
});