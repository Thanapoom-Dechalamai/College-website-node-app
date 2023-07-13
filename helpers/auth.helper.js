const jwt = require("jsonwebtoken");
const config = require("../configs/app");

const methods = {
    verifyAuthorization(req)
    {
        try
        {
            console.log(req?.headers?.["authorization"]);
            if (req?.headers?.["authorization"])
            {
                console.log(jwt.verify(req.headers["authorization"], config.secret), 'abc');
                return jwt.verify(req.headers["authorization"], config.secret);
            } else
            {
                console.log('error!');
            }
            return null;
        } catch (e)
        {
            console.log(e.message);
            return null;
        }
    },
};

module.exports = { ...methods };
