const jwt = require("jsonwebtoken");
const config = require("../configs/app");

const methods = {
    async requireAuth(req, res, next) {
        try {
            if (!req.headers.authorization) return res.status(401).json({
                message: "Unauthorized"
            });
            
            const token = (req.headers.authorization.includes(" ")) ? req.headers.authorization.split(" ")[1] : req.headers.authorization;
            const user = jwt.verify(token, config.secret);
            req.user = user;
            next();
        } catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }
};

module.exports = { ...methods };
