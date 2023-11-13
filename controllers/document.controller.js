const document_service = require("../services/document.service");

// THIS TABLE HAS BEEN REMOVED FROM THE DATABASE //

const method = {
    async onGetAll(req, res) {
        try {
            let list = await document_service.getAll();
            console.log(list);
            res.send({
                status: true,
                result: list
            });

        } catch (error) {
            console.log(error);
            res.send({
                status: false,
                result: error
            });
        }
    },
    async onGetByID(req, res) {
        try {
            if (!req.body || !req.body.id) {
                res.status(401).send("Bad request");
                return;
            }
            let list = await document_service.getOne(req.body.id);
            console.log(list);
            res.send({
                status: true,
                result: list
            });

        } catch (error) {
            console.log(error);
            res.send({
                status: false,
                result: error
            });
        }
    },
    async onCreateOne(req, res) {
        try {
            if (!req.body) res.status(401).send("Bad request");
            console.log(req.body);
            let result = await document_service.addOne(req.body);
            res.send({
                status: true,
                result: result
            });
        } catch (error) {
            console.log(error);
            res.send({
                status: false,
                result: error
            });
        }
    },
    async onUpdateAt(req, res) {
        try {
            if (!req.body || !req.body.id || !req.body.documentInfo) res.status(401).send("Bad request");
            console.log(`${req.body.id} + ${req.body.documentInfo}`);
            let result = await document_service.updateAt(req.body.id, req.body.documentInfo);
            console.log(result);
            res.send({
                status: true,
                result: result
            });
        } catch (error) {
            console.log(error);
            res.send({
                status: false,
                result: error
            });
        }
    },
    async onRemove(req, res) {
        try {
            if (!req.body || !req.body.id) res.status(401).send("Bad request");
            let result = await document_service.removeAt(req.body.id);
            console.log(result);
            res.send({
                status: true,
                result: result
            });
        } catch (error) {
            console.log(error);
            res.send({
                status: false,
                result: error
            });
        }
    }

};

module.exports = { ...method };