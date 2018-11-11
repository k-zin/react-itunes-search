import React from 'react';
import MusicListContainer from './containers/MusicListContainer';

const MusicSearch = () => {
  return (
    <div>
      iTunesから曲名検索をします
      <br />APIの制限上、最大取得件数は200件です
      <MusicListContainer />
    </div>
  )
}

export default MusicSearch