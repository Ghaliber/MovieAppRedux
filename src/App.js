import React from 'react';
import './App.css';
import EditModal from './EditModal'
import {Route} from 'react-router-dom'
import Description from './Description'
import {connect} from 'react-redux'
import Main from './Main'
function App(props) {
  return (
    <div className="App">
    <Route exact path='/' component={Main} />
    
  <Route exact path='/' render={() => <EditModal editOrAdd ='Add Movie'/>}/>
  {props.movies.map(el =>  <Route exact path={'/' + el.id} render={() => <Description info={el}/>} />)}
  
    
    </div>
  );
}
const mapStateToprops = state =>{
  return{
    movies: state.MovieReducer
  }
}
export default connect(mapStateToprops)(App);
