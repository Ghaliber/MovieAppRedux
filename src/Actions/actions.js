import {ADD_MOVIE, REMOVE_MOVIE, EDIT,SEARCH_TEXT} from './types'
export const addMovie = newMovie =>{
    return {
        type: ADD_MOVIE,
        payload: newMovie
    }
}
export const removeMovie = ID => {
    return{
        type: REMOVE_MOVIE,
        payload: ID
    }
}
export const editMovie = ID => {
    return{
        type: EDIT,
        payload: ID
    }
}
export const searchText = filter => {
    return{
        type: SEARCH_TEXT,
        payload: filter
    }
}