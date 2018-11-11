import { combineReducers } from 'redux';
import music from './musicSearchReducer';

const rootReducer = combineReducers({
  music
})

export default rootReducer