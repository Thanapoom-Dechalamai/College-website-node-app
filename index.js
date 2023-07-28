const express = require("express");
const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');

require("dotenv").config();
app.use(fileUpload());
app.use(express.json());
app.use(
    cors({
        origin: "*"
    })
);
app.use(require('./routes'));

const server = app.listen(process.env.SERVER_PORT, () =>
{
    let port = server.address().port;
    console.log(`Server is running at PORT ${port}`);
});