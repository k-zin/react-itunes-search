import axios from 'axios';
import { connect } from 'react-redux';
import { inputSearchWord, getMusicRequest, getMusicSuccess, getMusicFailure } from '../actions/musicGetAction'
import MusicList from '../components/MusicList';

const mapStateToProps = (state) => {
  const length = state.music.length
  const currentState = state.music[length - 1]
  if (Array.isArray(currentState.items) === true) {
    return { currentState: currentState }
  } else {
    return { currentState: [] }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputSearchWord: (e) => { dispatch(inputSearchWord(e)) },
    getMusic: (searchWord) => { getMusic(dispatch, searchWord) }
  }
}

const getMusic = (dispatch, searchWord) => {
  dispatch(getMusicRequest())
  axios.get('https://itunes.apple.com/search', {
    params: {
      term: searchWord,
      country: 'jp',
      limit: 200,
      media: 'music',
      entity: 'musicTrack',
      attribute: 'songTerm'
    },
    responseType: 'stream'
  }).then(response =>
    dispatch(getMusicSuccess(response.data))
  ).catch(error =>
    dispatch(getMusicFailure(error))
  )
}

const MusicListContainer = connect(mapStateToProps, mapDispatchToProps)(MusicList)

export default MusicListContainer