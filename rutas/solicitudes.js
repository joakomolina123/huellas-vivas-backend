const express = require('express');
const router = express.Router();
const solicitudesController = require('../controladores/solicitudes');

/**
 * @swagger
 * /api/solicitudes:
 *   get:
 *     summary: Obtener todas las solicitudes de adopción
 *     tags: [Solicitudes]
 *     responses:
 *       200:
 *         description: Lista de solicitudes obtenida exitosamente
 */
router.get('/', solicitudesController.obtenerSolicitudes);

/**
 * @swagger
 * /api/solicitudes:
 *   post:
 *     summary: Crear una solicitud de adopción
 *     tags: [Solicitudes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_usuario
 *               - id_mascota
 *             properties:
 *               id_usuario:
 *                 type: integer
 *                 example: 2
 *               id_mascota:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Solicitud enviada exitosamente
 */
router.post('/', solicitudesController.crearSolicitud);

/**
 * @swagger
 * /api/solicitudes/aprobar:
 *   post:
 *     summary: Aprobar adopción mediante transacción SQL atómica
 *     tags: [Solicitudes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_solicitud
 *             properties:
 *               id_solicitud:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Adopción aprobada y solicitudes duplicadas gestionadas
 */
router.post('/aprobar', solicitudesController.aprobarSolicitud);

module.exports = router;