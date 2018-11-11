export const INPUT_SEARCHWORD = 'INPUT_SEAARCHWORD'
export const GET_MUSIC_REQUEST = 'GET_MUSIC_REQUEST'
export const GET_MUSIC_SUCCESS = 'GET_MUSIC_SUCCESS'
export const GET_MUSIC_FAILURE = 'GET_MUSIC_FAILURE'

export const inputSearchWord = (text) => {
  return {
    type: INPUT_SEARCHWORD,
    searchWord: text,
    music: [],
    error: null
  }
}

export const getMusicRequest = () => {
  return {
    type: GET_MUSIC_REQUEST,
    error: null
  }
}

export const getMusicSuccess = (json) => {
  return {
    type: GET_MUSIC_SUCCESS,
    music: json.results,
    error: null
  }
}

export const getMusicFailure = (error) => {
  return {
    type: GET_MUSIC_FAILURE,
    music: [],
    error: error
  }
}