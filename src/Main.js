import React, { Component } from 'react'
import MovieList from './MovieList'
import Nav from './Nav'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <MovieList/>
            </div>
        )
    }
}

