const db = require('../config/bd');

// Obtener todas las solicitudes
const obtenerSolicitudes = async (req, res) => {
  try {
    const [filas] = await db.query("SELECT * FROM SOLICITUD_ADOPCION");
    res.json(filas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener las solicitudes' });
  }
};

// RF04 & RF10: Emitir solicitud evitando duplicados y verificando disponibilidad de la mascota
const crearSolicitud = async (req, res) => {
  try {
    const { id_usuario, id_mascota } = req.body;

    // 1. Verificar si la mascota existe y está 'Disponible'
    const [mascota] = await db.query(
      "SELECT estado FROM MASCOTA WHERE id_mascota = ?",
      [id_mascota]
    );

    if (mascota.length === 0) {
      return res.status(404).json({ mensaje: 'La mascota no existe' });
    }

    if (mascota[0].estado !== 'Disponible') {
      return res.status(400).json({ mensaje: 'Esta mascota ya ha sido adoptada o no está disponible' });
    }

    // 2. Verificar si ya existe solicitud pendiente
    const [existentes] = await db.query(
      "SELECT * FROM SOLICITUD_ADOPCION WHERE id_usuario = ? AND id_mascota = ? AND estado_solicitud = 'Pendiente'",
      [id_usuario, id_mascota]
    );

    if (existentes.length > 0) {
      return res.status(400).json({ mensaje: 'Ya tienes una solicitud en proceso para esta mascota' });
    }

    await db.query(
      "INSERT INTO SOLICITUD_ADOPCION (id_usuario, id_mascota) VALUES (?, ?)",
      [id_usuario, id_mascota]
    );

    res.status(201).json({ mensaje: 'Solicitud enviada exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al enviar la solicitud' });
  }
};

// RF07 & RNF02: Aprobar solicitud con Transacción SQL Atómica
const aprobarSolicitud = async (req, res) => {
  const connection = await db.getConnection();
  try {
    const { id_solicitud } = req.body;

    // 1. Obtener la solicitud e id_mascota
    const [solicitud] = await connection.query(
      "SELECT id_mascota, estado_solicitud FROM SOLICITUD_ADOPCION WHERE id_solicitud = ?",
      [id_solicitud]
    );

    if (solicitud.length === 0) {
      connection.release();
      return res.status(404).json({ mensaje: 'La solicitud no existe' });
    }

    if (solicitud[0].estado_solicitud === 'Aprobada') {
      connection.release();
      return res.status(400).json({ mensaje: 'Esta solicitud ya fue aprobada previamente' });
    }

    const id_mascota = solicitud[0].id_mascota;

    await connection.beginTransaction();

    // 2. Aprobar la solicitud elegida
    await connection.query(
      "UPDATE SOLICITUD_ADOPCION SET estado_solicitud = 'Aprobada' WHERE id_solicitud = ?",
      [id_solicitud]
    );

    // 3. Cambiar el estado de la mascota a 'Adoptada'
    await connection.query(
      "UPDATE MASCOTA SET estado = 'Adoptada' WHERE id_mascota = ?",
      [id_mascota]
    );

    // 4. Rechazar automáticamente las demás solicitudes pendientes para esa misma mascota
    await connection.query(
      "UPDATE SOLICITUD_ADOPCION SET estado_solicitud = 'Rechazada' WHERE id_mascota = ? AND id_solicitud != ? AND estado_solicitud = 'Pendiente'",
      [id_mascota, id_solicitud]
    );

    await connection.commit();
    res.json({ mensaje: 'Adopción aprobada y solicitudes restantes gestionadas automáticamente' });
  } catch (error) {
    await connection.rollback();
    console.error(error);
    res.status(500).json({ mensaje: 'Error al procesar la aprobación de la adopción' });
  } finally {
    connection.release();
  }
};

module.exports = {
  obtenerSolicitudes,
  crearSolicitud,
  aprobarSolicitud
};