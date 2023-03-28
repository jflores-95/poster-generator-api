# Poster Generator API

Esta API permite obtener información de álbumes y canciones de iTunes, incluyendo la lista de canciones y la imagen de portada en alta definición.

## Instalación

1. Clona este repositorio: `git clone https://github.com/tu_usuario/poster-generator-api.git`
2. Entra al directorio del proyecto: `cd poster-generator-api`
3. Instala las dependencias: `npm install`
4. Inicia el servidor: `npm start`

## Endpoints

### GET /albums

Busca información de un álbum por su nombre.

**Parámetros**

- `name`: nombre del álbum a buscar.

**Ejemplo de uso**

curl -X GET "http://localhost:3000/albums?name=circles"


### GET /search

Busca información de canciones y álbumes relacionados con una palabra clave.

**Parámetros**

- `term`: palabra clave a buscar.

**Ejemplo de uso**

curl -X GET "http://localhost:3000/search?term=post%20malone"

## Tecnologías utilizadas

- Node.js
- Express
- node-fetch
- Nodemon (sólo en desarrollo)

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

