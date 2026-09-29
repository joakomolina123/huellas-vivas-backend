const express = require('express');
const router = express.Router();
const controladorUsuarios = require('../controladores/usuarios');

/**
 * @swagger
 * /api/usuarios/registro:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - rut
 *               - nombre
 *               - correo
 *               - contrasena
 *             properties:
 *               rut:
 *                 type: string
 *                 example: "11.222.333-4"
 *               nombre:
 *                 type: string
 *                 example: "Pedro Pascal"
 *               correo:
 *                 type: string
 *                 example: "pedro@gmail.com"
 *               contrasena:
 *                 type: string
 *                 example: "123456"
 *               telefono:
 *                 type: string
 *                 example: "+56911112222"
 *               id_rol:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 */
router.post('/registro', controladorUsuarios.registrar);

/**
 * @swagger
 * /api/usuarios/{id}/estado:
 *   patch:
 *     summary: Cambiar estado de usuario (Borrado lógico)
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               activo:
 *                 type: integer
 *                 example: 0
 *     responses:
 *       200:
 *         description: Estado de usuario actualizado exitosamente
 */
router.patch('/:id/estado', controladorUsuarios.cambiarEstado);

module.exports = router;