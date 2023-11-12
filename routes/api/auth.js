const router = require("express").Router();
const controller = require('../../controllers/auth.controller');
const { requireAuth } = require("../../helpers/auth.helper");

/**
 * @swagger
 * components:
 *   schemas:
 *     LoginInput:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 *     ChangePasswordInput:
 *       type: object
 *       properties:
 *         password:
 *           type: string
 *      
 */
/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Login
 *     tags: [User]
 *     requestBody:
 *       description: Login Input Object
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginInput'
 *     responses:
 *       200:
 *         description: Successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/login', controller.onLogin);

/**
 * @swagger
 * /api/v1/auth/changePassword:
 *   post:
 *     summary: Change the user password
 *     tags: [User]
 *     parameters:
 *       - in: header
 *         name: authorization
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Change Password Input Object
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ChangePasswordInput'
 *     responses:
 *       200:
 *         description: Successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/changePassword', requireAuth, controller.onChangePassword);

module.exports = router;