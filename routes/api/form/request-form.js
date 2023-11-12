const router = require("express").Router();
const controller = require("../../../controllers/form/request-form.controller");

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateRequestFormInput:
 *       type: object
 *       properties:
 *         request_form_student_ID:
 *           type: number
 *         request_form_create_datetime:
 *           type: string
 *         request_form_document:
 *           type: number
 *         request_form_attached_file:
 *           type: string
 *      
 *     UpdateRequestFormInput:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         requestFormInfo:
 *           type: object
 *           properties:
 *             request_form_teacher_ID:
 *               type: number
 *             request_form_teacher_status:
 *               type: number
 *             request_form_teacher_description:
 *               type: string
 *             request_form_teacher_change_datetime:
 *               type: string
 *             request_form_head_ID:
 *               type: number
 *             request_form_head_status:
 *               type: number
 *             request_form_head_description:
 *               type: string
 *             request_form_head_change_datetime:
 *               type: string
 *              
 */
/**
 * @swagger
 * /api/v1/forms/requestForm/getAll:
 *   get:
 *     summary: Get all
 *     tags: [RequestForm]
 *     responses:
 *       200:
 *         description: OK
 */
router.get("/getAll", controller.onGetAll);

/**
 * @swagger
 * /api/v1/forms/requestForm/getByID:
 *   post:
 *     summary: Get one request form by ID
 *     tags: [RequestForm]
 *     requestBody:
 *       description: Request form ID object
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/IDInput"
 *     responses:
 *       200:
 *         description: Successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/getByID", controller.onGetByID);

/**
 * @swagger
 * /api/v1/forms/requestForm/create:
 *   post:
 *     summary: Create a new request form
 *     tags: [RequestForm]
 *     requestBody:
 *       description: Request form object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/CreateRequestFormInput"
 *     responses:
 *       200:
 *         description: Request form created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/create", controller.onCreate);

/**
 * @swagger
 * /api/v1/forms/requestForm/update:
 *   post:
 *     summary: Update a request form
 *     tags: [RequestForm]
 *     requestBody:
 *       description: Request form object to be updated
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/UpdateRequestFormInput"
 *     responses:
 *       200:
 *         description: Request form updated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/update", controller.onUpdate);

/**
 * @swagger
 * /api/v1/forms/requestForm/delete:
 *   post:
 *     summary: Delete a request form
 *     tags: [RequestForm]
 *     requestBody:
 *       description: Request form object to be deleted
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/IDInput"
 *     responses:
 *       200:
 *         description: Request form deleted successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/delete", controller.onDelete);

module.exports = router;