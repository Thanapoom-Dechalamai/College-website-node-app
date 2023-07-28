
const uploadFilesService = require('../services/upload-files.service');
const method = {
    async onUploadStudentImage(req, res)
    {
        try
        {
            const path = '/assets/profilePic/students/' + req.files['profile'].name;
            const data = req.files['profile'].data;
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
    async onUploadTeacherImage(req, res)
    {
        try
        {
            const path = '/assets/profilePic/teachers/' + req.files['profile'].name;
            const data = req.files['profile'].data;
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