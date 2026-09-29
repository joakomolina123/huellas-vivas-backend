const db = require('../config/bd');

// Registrar un nuevo usuario
const registrar = async (req, res) => {
  try {
    const { rut, nombre, correo, contrasena, telefono, id_rol } = req.body;

    const [resultado] = await db.query(
      'INSERT INTO USUARIO (rut, nombre, correo, contrasena, telefono, id_rol) VALUES (?, ?, ?, ?, ?, ?)',
      [rut, nombre, correo, contrasena, telefono || null, id_rol || 2]
    );

    res.status(201).json({
      mensaje: 'Usuario registrado exitosamente',
      id_usuario: resultado.insertId
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al registrar usuario', error: error.message });
  }
};

// Cambiar estado del usuario (Borrado Lógico)
const cambiarEstado = async (req, res) => {
  try {
    const { id } = req.params;
    const { activo } = req.body;

    await db.query(
      'UPDATE USUARIO SET activo = ? WHERE id_usuario = ?',
      [activo, id]
    );

    res.status(200).json({ mensaje: 'Estado de usuario actualizado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al actualizar estado del usuario', error: error.message });
  }
};

// EXPORTACIÓN OBLIGATORIA DE AMBAS FUNCIONES
module.exports = {
  registrar,
  cambiarEstado
};