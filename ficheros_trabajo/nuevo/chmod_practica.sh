#!/bin/bash

# Crear entorno de práctica
mkdir chmod_practica
cd chmod_practica

# Crear archivos y carpetas
touch reporte.txt secreto.txt backup.sh informe.pdf
mkdir proyecto publico

# Mostrar instrucciones al usuario
cat <<EOF

==========================
Práctica de permisos chmod
==========================

Debes asignar los permisos que se indican a cada archivo y carpeta
situada en la carpeta ~/chmod_practica según las siguientes indicaciones:
- En todos los casos debes realizarlo utilizando el modo simbólico y el modo octal.

1-1️reporte.txt
- Dueño: lectura y escritura
- Grupo: solo lectura
- Otros: sin permisos

2- secreto.txt
- Solo el dueño puede leer
- Ni grupo ni otros tienen permisos

3- backup.sh
- Dueño: lectura, escritura y ejecución
- Grupo: lectura y ejecución
- Otros: lectura y ejecución

4- informe.pdf
- Permisos actuales: 644 (lectura y escritura para el dueño, solo lectura para grupo y otros)
- Añadir ejecución solo al dueño

5- Carpeta proyecto
- Dueño y grupo: lectura, escritura y ejecución
- Otros: sin permisos
- Los archivos creados dentro heredan el grupo (SetGID)

6- Carpeta publico
- Dueño, grupo y otros: lectura, escritura y ejecución
- Solo el dueño puede borrar archivos (Sticky Bit)

=========================================
Ejecuta los comandos paso a paso
Después de cada uno, revisa con:
ls -l
=========================================

EOF
