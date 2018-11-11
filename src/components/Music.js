import React from 'react';

const Music = (music) => (
  <li>
    <hr />
    <h3><a href={"" + music.trackViewUrl}>{music.trackName}</a></h3>
    Artist Name - <a href={"" + music.artistViewUrl}>{music.artistName}</a>
    <br />Albam - <a href={"" + music.collectionViewUrl}>{music.collectionName}</a>
    <br /><img src={music.artworkUrl100} alt="Artwork"/>
    <br />
  </li>
)

export default Music