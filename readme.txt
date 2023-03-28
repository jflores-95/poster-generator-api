Consulta de álbumes de iTunes con Node.js y Express
Este es un ejemplo sencillo de cómo utilizar Node.js y el framework Express para realizar consultas al endpoint de información de álbumes de iTunes.

Requerimientos
Para ejecutar esta aplicación, necesitarás tener instalado lo siguiente en tu sistema:

Node.js
npm

Para instalar las dependencias del proyecto, debes ejecutar el siguiente comando en la terminal:


Uso
Para iniciar la aplicación, debes ejecutar el siguiente comando en la terminal:



npm start
Esto iniciará el servidor en el puerto 3000. Luego, puedes acceder a la aplicación en tu navegador web utilizando la siguiente dirección URL:


http://localhost:3000
Consulta de álbumes
Para realizar una consulta de un álbum en particular, debes acceder a la siguiente dirección URL en tu navegador web:


http://localhost:3000/album/{nombre-del-album}
Reemplaza {nombre-del-album} por el nombre del álbum que deseas buscar. Por ejemplo:


http://localhost:3000/album/Thriller
Esto devolverá un objeto JSON con la información del álbum encontrado en iTunes.

Créditos
Este proyecto fue desarrollado por Jose Flores.

Licencia
Este proyecto se encuentra bajo la licencia MIT.