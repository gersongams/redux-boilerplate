import {combineReducers} from 'redux'

import todos from './todos'
import loading from './loading'
import goals from './goals'

const rootReducer = combineReducers({
  todos,
  loading,
  goals,
});
export default rootReducer