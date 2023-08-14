const router = require("express").Router();
const controller = require('../../controllers/club-membership.controller');
/**
 * @swagger
 * components:
 *   schemas:
 *     CreateClubMembershipInput:
 *       type: object
 *       properties:
 *         club_ID:
 *           type: number
 *         club_student:
 *           type: number
 *      
 *     UpdateClubMembershipInput:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         clubMembershipInfo:
 *           type: object
 *           properties:
 *             club_ID:
 *               type: number
 *             club_student:
 *               type: number
 *      
 *     ClubMembershipIDInput:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 */

/**
 * @swagger
 * /api/v1/clubMembership/getAll:
 *   get:
 *     summary: Get all club membership
 *     tags: [ClubMembership]
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/getAll', controller.onGetAll);
/**
 * @swagger
 * /api/v1/clubMembership/getOne:
 *   post:
 *     summary: Get one club by ID
 *     tags: [ClubMembership]
 *     requestBody:
 *       description: Club Membership ID object
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClubMembershipIDInput'
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
 * /api/v1/clubMembership/create:
 *   post:
 *     summary: Create a new club
 *     tags: [ClubMembership]
 *     requestBody:
 *       description: Club object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateClubMembershipInput'
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
 * /api/v1/clubMembership/update:
 *   post:
 *     summary: Update a club
 *     tags: [ClubMembership]
 *     requestBody:
 *       description: Club object to be updated
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateClubMembershipInput'
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
 * /api/v1/clubMembership/remove:
 *   post:
 *     summary: Delete a club
 *     tags: [ClubMembership]
 *     requestBody:
 *       description: Club object to be deleted
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClubMembershipIDInput'
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