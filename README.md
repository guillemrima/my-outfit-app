# my-outfit-app
Descripción breve del proyecto.

Requisitos previos
Asegúrate de tener instalado lo siguiente antes de ejecutar este proyecto:

Node.js: Descargar Node.js
npm: Instalar npm
Instalación
Sigue los pasos a continuación para instalar y configurar el proyecto en tu máquina local:

Clona este repositorio en tu máquina local.
shell
Copy code
git clone https://github.com/tu-usuario/tu-repositorio.git
Ve a la carpeta api y ejecuta el siguiente comando para instalar las dependencias:
shell
Copy code
cd api
npm install
Luego, ve a la carpeta client y ejecuta el mismo comando para instalar las dependencias:
shell
Copy code
cd ../client
npm install
Uso
Para ejecutar la aplicación, sigue los pasos a continuación:

Abre una terminal.

Para ejecutar la aplicación en modo de desarrollo, ve a la carpeta client y utiliza el siguiente comando:

shell
Copy code
cd client
npm run dev
Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación desde tu navegador en http://localhost:3000.

Nota: Si deseas acceder a la aplicación desde otro dispositivo móvil en la misma red, utiliza el comando npm run host en lugar de npm run dev. Luego, podrás acceder a la aplicación ingresando la dirección IP del dispositivo host en el navegador del dispositivo móvil.

Si deseas ejecutar solo el servidor API, ve a la carpeta api y utiliza el siguiente comando:

shell
Copy code
cd api
npm start
Esto iniciará el servidor API en http://localhost:8000.

Contribución
Si deseas contribuir a este proyecto, sigue los pasos a continuación:

Realiza un fork de este repositorio.
Crea una nueva rama para tu funcionalidad:
shell
Copy code
git checkout -b nueva-funcionalidad
Realiza los cambios y realiza un commit:
shell
Copy code
git commit -m "Agrega una nueva funcionalidad"
Envía tus cambios al repositorio remoto:
shell
Copy code
git push origin nueva-funcionalidad
Abre un pull request en este repositorio principal.
