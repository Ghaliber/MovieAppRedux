import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
 

class Description extends Component {
  
    render() {
        return (
            <div>
            <img alt='' src={this.props.info.img}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <StarRatingComponent
                     name={this.props.info.name} 
                     editing={false}
                     renderStarIcon={() => <span>★</span>}
                     starCount={5}
                     value={this.props.info.rating}/>
                     <Link to='/'> back to main list </Link>
                    
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        movies: state.MovieReducer
    }
}
export default connect(mapStateToProps) (Description)
