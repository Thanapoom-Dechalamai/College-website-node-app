const router = require("express").Router();
const controller = require('../../controllers/student.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateStudentInput:
 *       type: object
 *       properties:
 *         student_ID:
 *           type: number
 *         student_position:
 *           type: number
 *         student_first_name:
 *           type: string
 *         student_last_name:
 *           type: string
 *         student_nickname:
 *           type: string
 *         student_first_name_thai:
 *           type: string
 *         student_last_name_thai:
 *           type: string
 *         student_nickname_thai:
 *           type: string
 *         student_gender:
 *           type: number
 *         student_major:
 *           type: number
 *         student_level:
 *           type: number
 *         student_class:
 *           type: number
 *         student_phone:
 *           type: string
 *         student_line_ID:
 *           type: string
 *         student_image:
 *           type: string
 *         student_email:
 *           type: string
 *      
 *     UpdateStudentInput:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         studentInfo:
 *           type: object
 *           properties:
 *             student_ID:
 *               type: number
 *             student_position:
 *               type: number
 *             student_first_name:
 *               type: string
 *             student_last_name:
 *               type: string
 *             student_nickname:
 *               type: string
 *             student_first_name_thai:
 *               type: string
 *             student_last_name_thai:
 *               type: string
 *             student_nickname_thai:
 *               type: string
 *             student_gender:
 *               type: number
 *             student_major:
 *               type: number
 *             student_level:
 *               type: number
 *             student_class:
 *               type: number
 *             student_phone:
 *               type: string
 *             student_line_ID:
 *               type: string
 *             student_image:
 *               type: string
 *             student_email:
 *               type: string
 *      
 *     DeleteStudentInput:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 */
/**
 * @swagger
 * /api/v1/student/getAll:
 *   get:
 *     summary: Get all students
 *     tags: [Student]
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/getAll', controller.onGetAll);
/**
 * @swagger
 * /api/v1/student/getByAmount?amount={amount}:
 *   get:
 *     summary: Get students from each major by amount.
 *     tags: [Student]
 *     parameters:
 *       - in: path
 *         name: amount
 *         required: true
 *         description: Amount of student.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.get('/getByAmount', controller.onGetByAmount);
/**
 * @swagger
 * /api/v1/student/getByClass?level={level}&class={class}:
 *   get:
 *     summary: Get students from given class and level
 *     tags: [Student]
 *     parameters:
 *       - in: path
 *         name: level
 *         required: true
 *         description: level.
 *         schema:
 *           type: integer
 *       - in: path
 *         name: class
 *         required: true
 *         description: class.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.get('/getByClass', controller.onGetByClass);
/**
 * @swagger
 * /api/v1/student/create:
 *   post:
 *     summary: Create a new student
 *     tags: [Student]
 *     requestBody:
 *       description: Student object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateStudentInput'
 *     responses:
 *       200:
 *         description: Student created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/create', controller.onCreateOne);
/**
 * @swagger
 * /api/v1/student/update:
 *   post:
 *     summary: Update a student
 *     tags: [Student]
 *     requestBody:
 *       description: Student object to be updated
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateStudentInput'
 *     responses:
 *       200:
 *         description: Student created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/update', controller.onUpdateAt);
/**
 * @swagger
 * /api/v1/student/remove:
 *   post:
 *     summary: Delete a student
 *     tags: [Student]
 *     requestBody:
 *       description: Student object to be deleted
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DeleteStudentInput'
 *     responses:
 *       200:
 *         description: Student deleted successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/remove', controller.onRemove);

module.exports = router;