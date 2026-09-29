-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: localhost    Database: huellas_vivas
-- ------------------------------------------------------
-- Server version	8.0.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `mascota`
--

DROP TABLE IF EXISTS `mascota`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mascota` (
  `id_mascota` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `especie` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `raza` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sexo` enum('Macho','Hembra') COLLATE utf8mb4_unicode_ci NOT NULL,
  `edad_aprox` int DEFAULT NULL,
  `tamano` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ciudad` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `esterilizado` tinyint(1) NOT NULL DEFAULT '0',
  `foto_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estado` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Disponible',
  `descripcion` text COLLATE utf8mb4_unicode_ci,
  `fecha_ingreso` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_modificacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_mascota`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mascota`
--

LOCK TABLES `mascota` WRITE;
/*!40000 ALTER TABLE `mascota` DISABLE KEYS */;
INSERT INTO `mascota` VALUES (1,'Milo','Perro','Mestizo','Macho',2,'Mediano','Valparaíso',1,'/images/milo.jpg','Disponible','Rescatado cerca del puerto. Muy juguetón, sociable con niños y con sus vacunas al día.','2026-09-28 23:11:06','2026-09-28 23:11:06'),(2,'Simba','Gato','Doméstico de pelo corto','Macho',1,'Pequeño','Viña del Mar',1,'/images/simba.jpg','Disponible','Tranquilo, regalón y acostumbrado a vivir en departamento.','2026-09-28 23:11:06','2026-09-28 23:11:06'),(3,'Luna','Perro','Quiltro mestizo','Hembra',3,'Grande','Valparaíso',1,'/images/luna.jpg','Disponible','Protectora, cariñosa y llena de energía para pasear.','2026-09-28 23:11:06','2026-09-28 23:11:06'),(4,'Mia','Gato','Mestizo','Hembra',1,'Pequeño','Quilpué',0,'/images/mia.jpg','Disponible','Rescatada de una camada en la calle, rescate reciente. Muy cariñosa.','2026-09-28 23:11:06','2026-09-28 23:11:06'),(5,'Tobias','Perro','Mestizo','Macho',2,'Mediano','Valparaíso',1,'/images/tobias.jpg','Disponible','Perrito juguetón y activo','2026-09-29 01:48:38','2026-09-29 01:48:38'),(6,'Tobias','Perro','Mestizo','Macho',2,'Mediano','Valparaíso',1,'/images/tobias.jpg','Disponible','Perrito juguetón y activo','2026-09-29 02:54:59','2026-09-29 02:54:59'),(7,'Tobias','Perro','Mestizo','Macho',2,'Mediano','Valparaíso',1,'/images/tobias.jpg','Disponible','Perrito juguetón y activo','2026-09-29 02:59:03','2026-09-29 02:59:03'),(8,'Tobias','Perro','Mestizo','Macho',2,'Mediano','Valparaíso',1,'/images/tobias.jpg','Disponible','Perrito juguetón y activo','2026-09-29 03:16:07','2026-09-29 03:16:07'),(9,'Tobias','Perro','Mestizo','Macho',2,'Mediano','Valparaíso',1,'/images/tobias.jpg','Disponible','Perrito juguetón y activo','2026-09-29 03:17:54','2026-09-29 03:17:54'),(10,'Rocky','Perro','Mestizo','Macho',3,'Grande','Valpara�so',1,'/images/rocky.jpg','Adoptada','Perrito amigable y juguet�n','2026-09-29 03:55:52','2026-09-29 04:36:07'),(11,'perry','Perro','Mestizo','Macho',2,'Mediano','Valparaíso',1,'/images/perry.jpg','Adoptada','Perrito juguetón y activo','2026-09-29 04:49:45','2026-09-29 04:58:47'),(12,'Cachupín','Perro','Mestizo','Macho',1,'Pequeño','Valparaíso',1,'/images/cachupin.jpg','Adoptada','Perrito cachorrón y juguetón','2026-09-29 04:55:51','2026-09-29 04:59:45');
/*!40000 ALTER TABLE `mascota` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-09-29  5:06:56
