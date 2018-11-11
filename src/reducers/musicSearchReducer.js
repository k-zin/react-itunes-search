import {
  INPUT_SEARCHWORD, GET_MUSIC_REQUEST, GET_MUSIC_SUCCESS, GET_MUSIC_FAILURE
} from '../actions/musicGetAction'

const initialState = {
  isFetching: false,
  searchWord: '',
  error: null,
  items: []
}

const music = (state = [initialState], action) => {
  switch (action.type) {
    case INPUT_SEARCHWORD:
      return [
        ...state,
        {
          isFetching: false,
          searchWord: action.searchWord,
          items: action.music,
          error: action.error
        }
      ]
    case GET_MUSIC_REQUEST:
      return [
        ...state,
        {
          isFetching: true,
          searchWord: action.searchWord,
          items: [],
          error: action.error
        }
      ]
    case GET_MUSIC_SUCCESS:
      return [
        ...state,
        {
          isFetching: false,
          searchWord: action.searchWord,
          items: action.music,
          error: action.error
        }
      ]
    case GET_MUSIC_FAILURE:
      return [
        ...state,
        {
          isFetching: false,
          searchWord: action.searchWord,
          items: action.music,
          error: action.error
        }
      ]
    default:
      return state
  }
}

export default music