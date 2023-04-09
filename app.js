import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors'
import { getAlbumTime, getYearOnly, formatDate, getTrackList} from './utilities.js';

const app = express();

app.use(cors());

// const corsOptions = {
//   origin: 'http://localhost:3001'
// };

// app.use(cors(corsOptions));

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
  const url = `https://itunes.apple.com/search?term=${keyword}&entity=album`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const results = data.results.map(result => {
        const item = {
          name: result.trackName || result.collectionName,
          artist: result.artistName,
          artworkUrl: result.artworkUrl100.replace(/100x100/g, '500x500'),
          albumId: result.collectionId,
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
        albumName: data.results[0].collectionName,
        albumId: data.results[0].collectionId,
        artWork:data.results[0].artworkUrl100.replace(/100x100/g, '1000x1000'),
        artistName:data.results[0].artistName,
        releaseDate: formatDate(data.results[0].releaseDate),
        copyRight:data.results[0].copyRight,
        contentAdvisoryRating: data.results[0].contentAdvisoryRating,
        tracksCount: data.results[0].trackCount,
        primaryGenreName: data.results[0].primaryGenreName,
        albumTime: getAlbumTime(data.results),
        releaseYear: getYearOnly(data.results[0].releaseDate),
        trackList: getTrackList(data.results),
      
      }
      
      res.send(results);
    })
    .catch(error => console.log(error));
});

app.listen(3000, () => {
  console.log('El servidor está funcionando en el puerto 3000.');
});

