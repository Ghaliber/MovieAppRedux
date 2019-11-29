import {ADD_MOVIE,REMOVE_MOVIE, EDIT,SEARCH_TEXT} from '../Actions/types'
import uuid from 'uuid'

let firstmovies = [{
    name: 'Shrek',
    img:'https://images.justwatch.com/poster/8732863/s592',
    rating: 4,
    id: uuid()
  },
  {
    name: 'Shrek 2',
    img:'https://images-na.ssl-images-amazon.com/images/I/71HQiOZsZ6L._SY445_.jpg',
    rating: 5,
    id: uuid()
  },
  {
   name:'Shrek 3',
   img:'https://prodimage.images-bn.com/pimages/0191329061084_p0_v1_s550x406.jpg',
   rating: 3,
   id: uuid()
  }]
const MovieReducer = (state = firstmovies, action) => {
    switch(action.type){
        case ADD_MOVIE:
            return state.concat(action.payload)
        case REMOVE_MOVIE:
            return state.filter(el => el.id !== action.payload)
        case EDIT:
            return state.map(el => el.id === action.payload.id ? {...el, name: action.payload.name, rating: action.payload.rating, img: action.payload.img} : el)
        case SEARCH_TEXT:
            return firstmovies.filter(el => el.name.toUpperCase().includes(action.payload.text.toUpperCase().trim()) && el.rating >= action.payload.rating)
        
        default: 
            return state
    }
}
export default MovieReducer