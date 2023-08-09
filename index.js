const express = require("express");
const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./configs/swagger');

require("dotenv").config();
app.use(fileUpload());
app.use(express.json());
app.use(
    cors({
        origin: "*"
    })
);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



app.use(require('./routes'));

const server = app.listen(process.env.SERVER_PORT, () =>
{
    let port = server.address().port;
    console.log(`Server is running at PORT ${port}`);
});