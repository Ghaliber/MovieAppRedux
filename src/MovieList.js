import React, { Component } from 'react'
import { connect } from 'react-redux'
import {removeMovie} from './Actions/actions'
import StarRatingComponent from 'react-star-rating-component';
import EditModal from './EditModal'
import {Link,Route} from 'react-router-dom'




class MovieList extends Component {
    render() {
        return (
            <div>
                {this.props.Movies.map(el => <div>
                    <h2>{el.name}</h2>
                    <img src={el.img} alt='N-word' />
                    <Link to={el.id}>Description</Link>
                    <EditModal editOrAdd ='Edit' id={el.id}/>
                    
                    <button onClick={() => this.props.remove(el.id)}>Remove</button>
                    <StarRatingComponent
                     name={el.name} 
                     editing={false}
                     renderStarIcon={() => <span>★</span>}
                     starCount={5}
                     value={el.rating}/>
                </div>)}


            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        Movies: state.MovieReducer

    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        remove: (x) => dispatch(removeMovie(x))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MovieList)
