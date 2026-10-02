const db = require('../config/bd');


const obtenerMascotas = async (req, res) => {
  try {
    const { ciudad, especie, tamano, sexo, esterilizado, estado } = req.query;

    let query = "SELECT * FROM MASCOTA WHERE 1=1";
    const queryParams = [];

    if (estado) {
      query += " AND estado = ?";
      queryParams.push(estado);
    } else {
      query += " AND estado = 'Disponible'";
    }

    if (ciudad) {
      query += " AND ciudad = ?";
      queryParams.push(ciudad);
    }
    if (especie) {
      query += " AND especie = ?";
      queryParams.push(especie);
    }
    if (tamano) {
      query += " AND tamano = ?";
      queryParams.push(tamano);
    }
    if (sexo) {
      query += " AND sexo = ?";
      queryParams.push(sexo);
    }
    if (esterilizado !== undefined) {
      query += " AND esterilizado = ?";
      queryParams.push(esterilizado);
    }

    
    query += " ORDER BY id_mascota DESC";

    const [rows] = await db.query(query, queryParams);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener las mascotas' });
  }
};


const crearMascota = async (req, res) => {
  try {
    const { nombre, especie, raza, sexo, edad_aprox, tamano, ciudad, esterilizado, foto_url, descripcion } = req.body;
    
    const query = `
      INSERT INTO MASCOTA (nombre, especie, raza, sexo, edad_aprox, tamano, ciudad, esterilizado, foto_url, descripcion)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    const [result] = await db.query(query, [
      nombre, especie, raza, sexo, edad_aprox, tamano, ciudad, esterilizado || 0, foto_url, descripcion
    ]);

    res.status(201).json({ mensaje: 'Mascota registrada correctamente', id_mascota: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al registrar la mascota' });
  }
};

module.exports = {
  obtenerMascotas,
  crearMascota
};
