import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from 'react-redux'
import { addMovie,editMovie } from './Actions/actions'
import StarRatingComponent from 'react-star-rating-component';



class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            name: "",
            rating: 0,
            img: ""
        };
    }
    handleShow = () => {
        this.setState({ show: !this.state.show });
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    add = () => {
        this.setState({ show: false });
       this.props.editOrAdd === 'Add Movie' ? this.props.addmovie(this.state) : this.props.editMovie({...this.state, id: this.props.id})
    };
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
        
      }
    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.handleShow}>
                    {this.props.editOrAdd}
        </Button>

                <Modal show={this.state.show} onHide={this.handleShow}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div>
                                <label>{this.props.editOrAdd === 'Edit' ? 'new title:' : 'title:'}</label>
                                <input type="text" onChange={this.handleChange} name="name" />
                            </div>
                            <div>
                                <label>{this.props.editOrAdd === 'Edit' ? 'new image:' : 'image:'}</label>
                                <input type="text" onChange={this.handleChange} name="img" />
                            </div>
                            <StarRatingComponent
                                name="rate1"
                                starCount={5}
                                value={this.state.rating}
                                onStarClick={this.onStarClick.bind(this)}
                            />

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleShow}>
                            Close
            </Button>
                        <Button onClick={this.add} variant="primary">
                        {this.props.editOrAdd === 'Edit' ? 'Edit Movie' : 'ADD'}
            </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
const mapDispatchStateToProps = (dispatch) => {
    return {
        addmovie: (x) => dispatch(addMovie(x)),
        editMovie: (x) => dispatch(editMovie(x))
    }
}

export default connect(null, mapDispatchStateToProps)(AddModal);
