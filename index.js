const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();
app.use(express.json());
app.use(
    cors({
        origin: "http://3.26.52.10:3000"
    }));
app.use(require('./routes'));

const server = app.listen(process.env.SERVER_PORT, () =>
{
    let port = server.address().port;
    console.log(`Server is running at PORT ${port}`);
});