# Poster Generator API

This is a simple Node.js API that utilizes the iTunes Search API to retrieve information about albums, songs, and artists. 

## Installation

1. Clone the repository: `git clone https://github.com/example-user/poster-generator-api.git`
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
