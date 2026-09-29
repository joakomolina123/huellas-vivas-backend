# Huellas Vivas - Sistema del Refugio

Sistema para la gestión del refugio de mascotas "Huellas Vivas", registro de personas y solicitudes de adopción.

---

## Programas Necesarios (Descargas)

Antes de comenzar, asegúrate de tener instalados estos programas en tu computadora:

1. **Node.js** (versión 18 o superior): Programa necesario para ejecutar el sistema backend.
2. **MySQL Workbench**: Programa para administrar la base de datos del refugio.
3. **Visual Studio Code**: Editor para abrir y ejecutar el proyecto.

---

## Pasos para hacer funcionar el proyecto

### 1. Preparar la Base de Datos
1. Abre **MySQL Workbench**.
2. Abre y ejecuta el archivo que está en la carpeta `sql/Huellas_vivas.sql` para crear las tablas y cargar la información inicial

### 2. Configurar la contraseña
Crea un archivo llamado `.env` en la carpeta principal del proyecto y pon tus datos de conexión a MySQL:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_contraseña_de_mysql
DB_NAME=huellas_vivas


```

### 3. Descargar las librerías del proyecto
Abre la consola en Visual Studio Code y escribe este comando para descargar todas las dependencias necesarias:

npm install

### 4. Encender el sistema
Para poner a andar el proyecto, escribe en la consola:

node servidor.js

### 5. Abre navegador y ejecuta
http://localhost:3000/api-docs