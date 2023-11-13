const express = require("express");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./configs/swagger");


require("dotenv").config();
app.use(fileUpload());
app.use(express.json());
app.use(
    cors({
        origin: ["https://blauens.com", "https://sbacprofile.blauens.com", "http://blauenthepeople.com", "http://localhost:5173", "http://localhost:5174"]
    })
);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(require("./routes"));

const server = app.listen(process.env.SERVER_PORT, () => {
    let port = server.address().port;
    console.log(`Server is running at PORT ${port}`);
    const sql = {
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    };
    console.log(`${JSON.stringify(sql)}`);
});