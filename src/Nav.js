import React, { Component } from 'react'
import {connect} from 'react-redux'
import { searchText } from './Actions/actions'
import StarRatingComponent from 'react-star-rating-component';

class Nav extends Component {
    constructor(props){
        super(props)
        this.state = {

            rating: null,
            text: ''
        }
        
    }
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue}, () => this.props.searchtext(this.state));
        
      }
    render() {
        return (
            <div>
                <input value={this.state.text} type='text' onChange={(content) => {this.setState({text: content.target.value}); this.props.searchtext({text:this.state.text, rating:this.state.rating})}}/>
                <button>Search</button>
                <StarRatingComponent
                                name="rate2"
                                starCount={5}
                                value={this.state.rating}
                                onStarClick={this.onStarClick.bind(this)}
                            />
                {/* <StartRating/> */}
                
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        searchtext: (x) => dispatch(searchText(x))
    }
}
export default connect(null,mapDispatchToProps)(Nav)
