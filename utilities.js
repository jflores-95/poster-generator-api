export const getAlbumTime = (tracks) => {
    return getTotalDuration(getTrackList(tracks));
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
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(fecha);
    return formattedDate;
  }

  export const getTrackList = (albumTracks) => {
    const tracks = albumTracks.filter(track => track.wrapperType === 'track');
    return tracks;
  }


  