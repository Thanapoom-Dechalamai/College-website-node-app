
const uploadFilesService = require('../services/upload-files.service');
const method = {
    async onUploadStudentImage(req, res)
    {
        try
        {
            if (!req.files['image'] || !req.body.filename) return res.status(401).send("Bad request");
            const path = '/assets/profilePic/students/' + req.body.filename;
            const data = req.files['image'].data;
            let result = await uploadFilesService.upLoadImage(path, data);
            res.send({
                status: true,
                result
            });

        } catch (error)
        {
            console.log(error);
            res.send({
                status: false,
                result: error
            });
        }
    },
    async onUploadTeacherImage(req, res)
    {
        try
        {
            if (!req.files['image'] || !req.body.filename) return res.status(401).send("Bad request");
            const path = '/assets/profilePic/teachers/' + req.body.filename;
            const data = req.files['image'].data;
            let result = await uploadFilesService.upLoadImage(path, data);
            console.log(result);
            res.send({
                status: true,
                result
            });

        } catch (error)
        {
            console.log(error);
            res.send({
                status: false,
                result: error
            });
        }
    },
    async onUploadLeaveNotice(req, res)
    {
        try
        {
            if (!req.files['image'] || !req.body.filename) return res.status(401).send("Bad request");
            const path = '/assets/files/leaveNotices' + req.body.filename;
            const data = req.files['image'].data;
            let result = await uploadFilesService.upLoadImage(path, data);
            console.log(result);
            res.send({
                status: true,
                result
            });

        } catch (error)
        {
            console.log(error);
            res.send({
                status: false,
                result: error
            });
        }
    }
};

module.exports = { ...method };