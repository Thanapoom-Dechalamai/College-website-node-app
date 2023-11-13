const router = require("express").Router();
const controller = require("../../controllers/announcement.controller");

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateAnnouncementInput:
 *       type: object
 *       properties:
 *         announcement_status:
 *           type: number
 *         announcement_title:
 *           type: string
 *         announcement_description:
 *           type: string
 *         announcement_image:
 *           type: string
 *         announcement_create_datetime:
 *           type: string
 *      
 *     UpdateAnnouncementInput:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         announcementInfo:
 *           type: object
 *           properties:
 *              announcement_status:
 *                  type: number
 *              announcement_title:
 *                  type: string
 *              announcement_description:
 *                  type: string
 *              announcement_image:
 *                  type: string
 *              announcement_create_datetime:
 *                  type: string
 *      
 */

/**
 * @swagger
 * /api/v1/announcement/getAll:
 *   get:
 *     summary: Get all announcements
 *     tags: [Announcement]
 *     responses:
 *       200:
 *         description: OK
 */
router.get("/getAll", controller.onGetAll);

/**
 * @swagger
 * /api/v1/announcement/getOne:
 *   post:
 *     summary: Get a announcement by ID
 *     tags: [Announcement]
 *     requestBody:
 *       description: Announcement ID object
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
router.post("/getOne", controller.onGetByID);

/**
 * @swagger
 * /api/v1/announcement/create:
 *   post:
 *     summary: Create a announcement
 *     tags: [Announcement]
 *     requestBody:
 *       description: Announcement object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/CreateAnnouncementInput"
 *     responses:
 *       200:
 *         description: Announcement created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/create", controller.onCreate);

/**
 * @swagger
 * /api/v1/announcement/update:
 *   post:
 *     summary: Update a Announcement
 *     tags: [Announcement]
 *     requestBody:
 *       description: Announcement object to be updated
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/UpdateAnnouncementInput"
 *     responses:
 *       200:
 *         description: Announcement updated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/update", controller.onUpdate);

/**
 * @swagger
 * /api/v1/announcement/delete:
 *   post:
 *     summary: Delete a announcement
 *     tags: [Announcement]
 *     requestBody:
 *       description: Announcement object to be deleted
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/IDInput"
 *     responses:
 *       200:
 *         description: Announcement deleted successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/delete", controller.onDelete);

module.exports = router;