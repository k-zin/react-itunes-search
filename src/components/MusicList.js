import React from 'react';
import Music from './Music';

const MusicList = ({ currentState, getMusic, inputSearchWord }) => {
  return (
    <div>
      <input type="text" onChange={(e) => inputSearchWord(e.target.value)} />
      <button onClick={() => getMusic(currentState.searchWord)}>GET</button>
      {currentState.items.length === 0 ? null : <p>{currentState.items.length}件見つかりました</p>}
      <ul>{currentState.items.map((music, index) => <Music key={index}{...music} />)}</ul>
    </div>
  )
}

export default MusicList