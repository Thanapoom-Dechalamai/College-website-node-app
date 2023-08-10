const router = require("express").Router();
const controller = require('../../controllers/club.controller');
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
 *             club_status:
 *               type: number
 *             club_capacity:
 *               type: number
 *      
 *     ClubIDInput:
 *       type: object
 *       properties:
 *         id:
 *           type: number
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
router.get('/getAll', controller.onGetAll);
/**
 * @swagger
 * /api/v1/club/getOne:
 *   post:
 *     summary: Get one club by ID
 *     tags: [Club]
 *     requestBody:
 *       description: Club ID object
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClubIDInput'
 *     responses:
 *       200:
 *         description: Successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/getOne', controller.onGetByID);
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
 *             $ref: '#/components/schemas/CreateClubInput'
 *     responses:
 *       200:
 *         description: Club created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/create', controller.onCreateOne);
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
 *             $ref: '#/components/schemas/UpdateClubInput'
 *     responses:
 *       200:
 *         description: Club updated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/update', controller.onUpdateAt);
/**
 * @swagger
 * /api/v1/club/remove:
 *   post:
 *     summary: Delete a club
 *     tags: [Club]
 *     requestBody:
 *       description: Club object to be deleted
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClubIDInput'
 *     responses:
 *       200:
 *         description: Club deleted successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/remove', controller.onRemove);

module.exports = router;