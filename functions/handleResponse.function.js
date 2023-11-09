const handleResponse = (res, status, result) => {
    res.status(status).send({ status, result });
};

module.exports = { handleResponse };