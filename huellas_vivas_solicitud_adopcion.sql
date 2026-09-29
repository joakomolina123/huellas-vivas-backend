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
-- Table structure for table `solicitud_adopcion`
--

DROP TABLE IF EXISTS `solicitud_adopcion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `solicitud_adopcion` (
  `id_solicitud` int NOT NULL AUTO_INCREMENT,
  `fecha_solicitud` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estado_solicitud` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Pendiente',
  `id_usuario` int NOT NULL,
  `id_mascota` int NOT NULL,
  PRIMARY KEY (`id_solicitud`),
  KEY `fk_solicitud_usuario` (`id_usuario`),
  KEY `fk_solicitud_mascota` (`id_mascota`),
  CONSTRAINT `fk_solicitud_mascota` FOREIGN KEY (`id_mascota`) REFERENCES `mascota` (`id_mascota`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_solicitud_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solicitud_adopcion`
--

LOCK TABLES `solicitud_adopcion` WRITE;
/*!40000 ALTER TABLE `solicitud_adopcion` DISABLE KEYS */;
INSERT INTO `solicitud_adopcion` VALUES (1,'2026-09-29 01:49:41','Aprobada',2,1),(2,'2026-09-29 03:06:53','Aprobada',11,3),(3,'2026-09-29 03:12:38','Pendiente',11,7),(5,'2026-09-29 03:18:35','Aprobada',2,9),(6,'2026-09-29 03:26:13','Pendiente',2,1),(7,'2026-09-29 03:28:20','Pendiente',5,3),(8,'2026-09-29 03:28:32','Pendiente',5,2),(9,'2026-09-29 04:06:34','Pendiente',11,3),(10,'2026-09-29 04:12:29','Aprobada',11,10),(11,'2026-09-29 04:50:23','Aprobada',2,11),(12,'2026-09-29 04:58:25','Aprobada',2,12);
/*!40000 ALTER TABLE `solicitud_adopcion` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-09-29  5:06:55
