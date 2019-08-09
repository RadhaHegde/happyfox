import listReducer from '../reducers/listReducer';
import {combineReducers} from 'redux'
/* const rootReducer=()=>combineReducers({
    listReducer
})

export default rootReducer; */

export default combineReducers({
    // the keys here are going to be the property of state that we are producing.
    rootReducer: listReducer
    
  });