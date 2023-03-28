import express from 'express';
import fetch from 'node-fetch';

const app = express();

const ITUNES_API_URL = 'https://itunes.apple.com/search?entity=album&term=';

app.get('/albums', (req, res) => {
  const albumName = req.query.name;
  const url = `https://itunes.apple.com/search?term=${albumName}&entity=album`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const album = data.results.find(result => result.collectionName.toLowerCase() === albumName.toLowerCase());
      if (album) {
        const albumInfo = {
          name: album.collectionName,
          artist: album.artistName,
          releaseDate: album.releaseDate,
          trackList: album.trackList,
          artworkUrl: album.artworkUrl100.replace(/100x100/g, '500x500')
        };
        res.send(albumInfo);
      } else {
        res.send(`No se encontró información para el álbum ${albumName}`);
      }
    })
    .catch(error => console.log(error));
});


app.get('/search', (req, res) => {
  const keyword = req.query.q;
  const url = `https://itunes.apple.com/search?term=${keyword}&entity=album,song,musicVideo`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const results = data.results.map(result => {
        const item = {
          name: result.trackName || result.collectionName,
          artist: result.artistName,
          type: result.wrapperType,
          artworkUrl: result.artworkUrl100.replace(/100x100/g, '500x500'),
          previewUrl: result.previewUrl
        };
        return item;
      });
      res.send(results);
    })
    .catch(error => console.log(error));
});



// Función para obtener el track list de una página HTML
function obtenerTrackList(html) {
  // código para extraer el track list del HTML
}

app.listen(3000, () => {
  console.log('El servidor está funcionando en el puerto 3000.');
});
