const express = require('express');
const router = express.Router();
const mascotasController = require('../controladores/mascotas');

/**
 * @swagger
 * /api/mascotas:
 *   get:
 *     summary: Obtener catálogo de mascotas con filtros
 *     tags: [Mascotas]
 *     parameters:
 *       - in: query
 *         name: ciudad
 *         schema:
 *           type: string
 *         description: Ciudad (ej. Valparaíso)
 *       - in: query
 *         name: especie
 *         schema:
 *           type: string
 *         description: Especie (Perro / Gato)
 *     responses:
 *       200:
 *         description: Lista de mascotas obtenida exitosamente
 */
router.get('/', mascotasController.obtenerMascotas);

/**
 * @swagger
 * /api/mascotas:
 *   post:
 *     summary: Registrar una nueva mascota en el refugio
 *     tags: [Mascotas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - especie
 *               - sexo
 *               - ciudad
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Tobias"
 *               especie:
 *                 type: string
 *                 example: "Perro"
 *               raza:
 *                 type: string
 *                 example: "Mestizo"
 *               sexo:
 *                 type: string
 *                 example: "Macho"
 *               edad_aprox:
 *                 type: integer
 *                 example: 2
 *               tamano:
 *                 type: string
 *                 example: "Mediano"
 *               ciudad:
 *                 type: string
 *                 example: "Valparaíso"
 *               esterilizado:
 *                 type: integer
 *                 example: 1
 *               foto_url:
 *                 type: string
 *                 example: "/images/tobias.jpg"
 *               descripcion:
 *                 type: string
 *                 example: "Perrito muy cariñoso y activo"
 *     responses:
 *       201:
 *         description: Mascota registrada correctamente
 */
router.post('/', mascotasController.crearMascota);

module.exports = router;