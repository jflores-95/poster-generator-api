# Poster Generator API 

This is a simple Node.js API that utilizes the iTunes Search API to retrieve information about albums, songs, and artists. 

## Installation

1. Clone the repository: `git clone https://github.com/jflores-95/poster-generator-api.git`
2. Install dependencies: `npm install`

## Usage

### Get album information

To get information about a specific album, make a GET request to `/albums` with the query parameter `name` set to the name of the album. 

Example: `http://localhost:3000/albums?name=circles`

The API will return information about the album, including the name, artist, release date, track list, and artwork URL in high definition.

### Search for albums, songs, and artists

To search for albums, songs, and artists by keyword, make a GET request to `/search` with the query parameter `term` set to the keyword. 

Example: `http://localhost:3000/search?term=post%20malone`

The API will return information about all albums, songs, and artists that match the search term.

## Technologies Used

- Node.js
- Express.js
- node-fetch

## License

This project is licensed under the MIT License - see the LICENSE file for details.


# Poster Generator API

Esta API permite obtener información de álbumes y canciones de iTunes, incluyendo la lista de canciones y la imagen de portada en alta definición.

## Instalación

1. Clona este repositorio: `git clone https://github.com/jflores-95/poster-generator-api.git`
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
