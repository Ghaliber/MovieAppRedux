import {combineReducers} from 'redux'
import MovieReducer from './MovieReducer'

export default combineReducers({MovieReducer},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())