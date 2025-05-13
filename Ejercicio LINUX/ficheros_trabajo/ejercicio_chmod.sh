#!/bin/bash

# Crear entorno de práctica
mkdir chmod_practica
cd chmod_practica

# Crear archivos y carpetas
touch reporte.txt secreto.txt backup.sh informe.pdf
mkdir proyecto publico

# Mostrar instrucciones al usuario
cat <<EOF

=========================================
Bienvenido a la práctica de permisos chmod
=========================================

Tu tarea es asignar los permisos correctos a cada archivo y carpeta
según las siguientes indicaciones:

1️⃣ reporte.txt
- Dueño: lectura y escritura
- Grupo: solo lectura
- Otros: sin permisos

Ejecuta:
chmod 640 reporte.txt

2️⃣ secreto.txt
- Solo el dueño puede leer
- Ni grupo ni otros tienen permisos

Ejecuta:
chmod 400 secreto.txt

3️⃣ backup.sh
- Dueño: lectura, escritura y ejecución
- Grupo: lectura y ejecución
- Otros: lectura y ejecución

Ejecuta:
chmod 755 backup.sh

4️⃣ informe.pdf
- Permisos actuales: 644 (lectura y escritura para el dueño, solo lectura para grupo y otros)
- Añadir ejecución solo al dueño

Ejecuta:
chmod u+x informe.pdf

5️⃣ Carpeta proyecto
- Dueño y grupo: lectura, escritura y ejecución
- Otros: sin permisos
- Los archivos creados dentro heredan el grupo (SetGID)

Ejecuta:
chmod 2770 proyecto

6️⃣ Carpeta publico
- Dueño, grupo y otros: lectura, escritura y ejecución
- Solo el dueño puede borrar archivos (Sticky Bit)

Ejecuta:
chmod 1777 publico

=========================================
Ejecuta los comandos paso a paso
Después de cada uno, revisa con:
ls -l
=========================================

EOF

# Crear un alias para revisar permisos
echo 'alias revisar="ls -l"' >> ~/.bashrc
echo "Alias 'revisar' creado. Recarga con 'source ~/.bashrc' o abre una nueva terminal."
