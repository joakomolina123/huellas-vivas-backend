const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Huellas Vivas',
      version: '1.0.0',
      description: 'Sistema de gestión de refugio de mascotas, adoptantes y solicitudes de adopción',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Servidor Local',
      },
    ],
    paths: {
      '/api/mascotas': {
        get: {
          summary: 'Obtener catálogo de mascotas con filtros',
          tags: ['Mascotas'],
          parameters: [
            { in: 'query', name: 'ciudad', schema: { type: 'string' }, description: 'Ej. Valparaíso' },
            { in: 'query', name: 'especie', schema: { type: 'string' }, description: 'Ej. Perro o Gato' }
          ],
          responses: {
            200: { description: 'Lista de mascotas obtenida exitosamente' }
          }
        },
        post: {
          summary: 'Registrar una nueva mascota',
          tags: ['Mascotas'],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    nombre: { type: 'string', example: 'Tobias' },
                    especie: { type: 'string', example: 'Perro' },
                    raza: { type: 'string', example: 'Mestizo' },
                    sexo: { type: 'string', example: 'Macho' },
                    edad_aprox: { type: 'integer', example: 2 },
                    tamano: { type: 'string', example: 'Mediano' },
                    ciudad: { type: 'string', example: 'Valparaíso' },
                    esterilizado: { type: 'integer', example: 1 },
                    foto_url: { type: 'string', example: '/images/tobias.jpg' },
                    descripcion: { type: 'string', example: 'Perrito juguetón y activo' }
                  }
                }
              }
            }
          },
          responses: {
            201: { description: 'Mascota registrada correctamente' }
          }
        }
      },
      '/api/usuarios/registro': {
        post: {
          summary: 'Registrar un nuevo usuario',
          tags: ['Usuarios'],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    rut: { type: 'string', example: '11.222.333-4' },
                    nombre: { type: 'string', example: 'Pedro Pascal' },
                    correo: { type: 'string', example: 'pedro@gmail.com' },
                    contrasena: { type: 'string', example: '123456' },
                    telefono: { type: 'string', example: '+56911112222' },
                    id_rol: { type: 'integer', example: 2 }
                  }
                }
              }
            }
          },
          responses: {
            201: { description: 'Usuario registrado exitosamente' }
          }
        }
      },
      '/api/usuarios/{id}/estado': {
        patch: {
          summary: 'Cambiar estado de usuario (Borrado lógico)',
          tags: ['Usuarios'],
          parameters: [
            { in: 'path', name: 'id', required: true, schema: { type: 'integer' }, description: 'ID del usuario' }
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    activo: { type: 'integer', example: 0 }
                  }
                }
              }
            }
          },
          responses: {
            200: { description: 'Estado actualizado exitosamente' }
          }
        }
      },
      '/api/solicitudes': {
        post: {
          summary: 'Crear una solicitud de adopción',
          tags: ['Solicitudes'],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    id_usuario: { type: 'integer', example: 2 },
                    id_mascota: { type: 'integer', example: 1 }
                  }
                }
              }
            }
          },
          responses: {
            201: { description: 'Solicitud creada exitosamente' }
          }
        }
      },
      '/api/solicitudes/aprobar': {
        post: {
          summary: 'Aprobar adopción mediante transacción SQL',
          tags: ['Solicitudes'],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    id_solicitud: { type: 'integer', example: 1 }
                  }
                }
              }
            }
          },
          responses: {
            200: { description: 'Adopción aprobada exitosamente' }
          }
        }
      }
    }
  },
  apis: [],
};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Importar rutas
const rutasMascotas = require('./rutas/mascotas');
const rutasUsuarios = require('./rutas/usuarios');
const rutasSolicitudes = require('./rutas/solicitudes');

app.use('/api/mascotas', rutasMascotas);
app.use('/api/usuarios', rutasUsuarios);
app.use('/api/solicitudes', rutasSolicitudes);

app.get('/', (req, res) => {
  res.send('API Huellas Vivas funcionando correctamente. Visita /api-docs para ver Swagger.');
});

app.listen(PORT, () => {
  console.log(`=================================`);
  console.log(`🐾 Servidor corriendo en puerto ${PORT}`);
  console.log(`📚 Swagger Docs: http://localhost:${PORT}/api-docs`);
  console.log(`=================================`);
});