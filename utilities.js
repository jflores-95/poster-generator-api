export const getAlbumTime = (tracks) => {
    const onlyTracks = tracks;
    onlyTracks.shift();
    return getTotalDuration(onlyTracks);
}

function convertDuration(milliseconds) {
    let minutes = Math.floor(milliseconds / 60000);
    let seconds = ((milliseconds % 60000) / 1000).toFixed(0);
    return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
  }
  
  function getTotalDuration(tracks) {
    const totalDuration = tracks.reduce((acc, track) => {
      return acc + track.trackTimeMillis;
    }, 0);
    return convertDuration(totalDuration);
  }

  export const getYearOnly = (dateISO)=> {
    const date = new Date(dateISO);
    return date.getFullYear();
  }

  export const formatDate = (dateISO) => {
    const fecha = new Date(dateISO);
    const month = fecha.getMonth() + 1;
    const day = fecha.getDate();
    const year = fecha.getFullYear();
    const formattedDate = `${month < 10 ? '0' : ''}${month}/${day < 10 ? '0' : ''}${day}/${year}`;
    return formattedDate; 
    
  }


  