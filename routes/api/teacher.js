const router = require("express").Router();
const controller = require('../../controllers/teacher.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateTeacherInput:
 *       type: object
 *       properties:
 *         teacher_ID:
 *           type: number
 *         teacher_position:
 *           type: number
 *         teacher_first_name:
 *           type: string
 *         teacher_last_name:
 *           type: string
 *         teacher_nickname:
 *           type: string
 *         teacher_first_name_thai:
 *           type: string
 *         teacher_last_name_thai:
 *           type: string
 *         teacher_nickname_thai:
 *           type: string
 *         teacher_gender:
 *           type: number
 *         teacher_major:
 *           type: number
 *         teacher_phone:
 *           type: string
 *         teacher_line_ID:
 *           type: string
 *         teacher_image:
 *           type: string
 *         teacher_email:
 *           type: string
 *      
 *     UpdateTeacherInput:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         teacherInfo:
 *           type: object
 *           properties:
 *             teacher_ID:
 *               type: number
 *             teacher_position:
 *               type: number
 *             teacher_first_name:
 *               type: string
 *             teacher_last_name:
 *               type: string
 *             teacher_nickname:
 *               type: string
 *             teacher_first_name_thai:
 *               type: string
 *             teacher_last_name_thai:
 *               type: string
 *             teacher_nickname_thai:
 *               type: string
 *             teacher_gender:
 *               type: number
 *             teacher_major:
 *               type: number
 *             teacher_phone:
 *               type: string
 *             teacher_line_ID:
 *               type: string
 *             teacher_image:
 *               type: string
 *             teacher_email:
 *               type: string
 *
 */
/**
 * @swagger
 * /api/v1/teacher/getAll:
 *   get:
 *     summary: Get all teachers
 *     tags: [Teacher]
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/getAll', controller.onGetAll);

/**
 * @swagger
 * /api/v1/teacher/create:
 *   post:
 *     summary: Create a new teacher
 *     tags: [Teacher]
 *     requestBody:
 *       description: Teacher object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateTeacherInput'
 *     responses:
 *       200:
 *         description: Teacher created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/create', controller.onCreate);

/**
 * @swagger
 * /api/v1/teacher/update:
 *   post:
 *     summary: Update a teacher
 *     tags: [Teacher]
 *     requestBody:
 *       description: Teacher object to be updated
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateTeacherInput'
 *     responses:
 *       200:
 *         description: Teacher created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/update', controller.onUpdate);

/**
 * @swagger
 * /api/v1/teacher/delete:
 *   post:
 *     summary: Delete a teacher
 *     tags: [Teacher]
 *     requestBody:
 *       description: Teacher object to be deleted
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IDInput'
 *     responses:
 *       200:
 *         description: Teacher deleted successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/delete', controller.onDelete);

module.exports = router;