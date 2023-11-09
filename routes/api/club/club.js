const router = require("express").Router();
const controller = require("../../../controllers/club/club.controller");

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateClubInput:
 *       type: object
 *       properties:
 *         club_name:
 *           type: string
 *         club_major:
 *           type: number
 *         club_teacher:
 *           type: string
 *         club_description:
 *           type: string
 *         club_image:
 *           type: string
 *         club_status:
 *           type: number
 *         club_capacity:
 *           type: number
 *      
*     UpdateClubInput:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         clubInfo:
 *           type: object
 *           properties:
 *             club_name:
 *               type: string
 *             club_major:
 *               type: number
 *             club_teacher:
 *               type: string
 *             club_description:
 *               type: string
 *             club_image:
 *               type: string
 *             club_status:
 *               type: number
 *             club_capacity:
 *               type: number
 *      
 */
/**
 * @swagger
 * /api/v1/club/getAll:
 *   get:
 *     summary: Get all club
 *     tags: [Club]
 *     responses:
 *       200:
 *         description: OK
 */
router.get("/getAll", controller.onGetAll);

/**
 * @swagger
 * /api/v1/club/create:
 *   post:
 *     summary: Create a new club
 *     tags: [Club]
 *     requestBody:
 *       description: Club object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/CreateClubInput"
 *     responses:
 *       200:
 *         description: Club created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/create", controller.onCreate);

/**
 * @swagger
 * /api/v1/club/update:
 *   post:
 *     summary: Update a club
 *     tags: [Club]
 *     requestBody:
 *       description: Club object to be updated
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/UpdateClubInput"
 *     responses:
 *       200:
 *         description: Club updated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/update", controller.onUpdate);

/**
 * @swagger
 * /api/v1/club/delete:
 *   post:
 *     summary: Delete a club
 *     tags: [Club]
 *     requestBody:
 *       description: Club object to be deleted
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/IDInput"
 *     responses:
 *       200:
 *         description: Club deleted successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/delete", controller.onDelete);

module.exports = router;