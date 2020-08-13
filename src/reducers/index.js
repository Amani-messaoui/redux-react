import reducer from './counter';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    counter :reducer,
    isLogged : loggedReducer
})
export default allReducers;