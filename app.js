import express from 'express';
import fetch from 'node-fetch';

const app = express();

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
          artworkUrl: album.artworkUrl100.replace(/100x100/g, '1200x1200'),
          id: album.collectionId
        };
        res.send(albumInfo);
      } else {
        res.send(`No se encontró información para el álbum ${albumName}`);
      }
    })
    .catch(error => console.log(error));
});


app.get('/search', (req, res) => {
  const keyword = req.query.term;
  const limit = req.query.limit;
  const url = `https://itunes.apple.com/search?term=${keyword}&entity=album,song&limit=${limit}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const results = data.results.map(result => {
        const item = {
          name: result.trackName || result.collectionName,
          artist: result.artistName,
          type: result.wrapperType,
          artworkUrl: result.artworkUrl100.replace(/100x100/g, '500x500'),
          previewUrl: result.previewUrl,
          albumId: result.collectionId,
          contentAdvisoryRating: result.contentAdvisoryRating,
          trackCount: result.trackCount,
          copyright: result.copyright,
          country: result.country,
          releaseDate: result.releaseDate,
          primaryGenreName: result.primaryGenreName
        };   
        return item;
      });
      res.send(results);
    })
    .catch(error => console.log(error));
});

app.get('/albumId', (req, res) => {
  const albumId = req.query.albumId;
  const url = `https://itunes.apple.com/lookup?id=${albumId}&entity=song`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log("DATA",data)
      const results = {
        tracksCount: data.resultCount,
        trackList: data.results
      }

      res.send(results);
    })
    .catch(error => console.log(error));
});

app.listen(3000, () => {
  console.log('El servidor está funcionando en el puerto 3000.');
});
