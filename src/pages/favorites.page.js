import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap/';
import AppBar from 'material-ui/AppBar';
import MoviesList from '../components/movieList';
import { movies } from '../resources/movies';
import * as movieListUtils from '../components/utils/movieListUtils';
import MovieModal from '../components/movieModal';
import customAxios from "../httpRequests/customAxios";

const REQUEST_HEADER_WITH_CREDENTIAL = { headers: { "Content-Type":"application/json", "Accept":"application/json" }, withCredentials: true };

export default class FavoritesPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            isModalOpened: false,
            movies: null
        };
    }

    async componentDidMount() {
        let movies = await  customAxios.get('/favourites', REQUEST_HEADER_WITH_CREDENTIAL);

        console.log(movies);
        console.log("did mount favorites---------------------");

        this.setState({...this.state, movies: movies.data});
    }

    openModal(movie){
        this.setState({...this.state, isModalOpened: true, movie: movie} )
    }

    closeModal(){
        this.setState({...this.state, isModalOpened: false} )
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <MoviesList movies={this.state.movies} openModal = {this.openModal.bind(this)}/>
                    </Row>
                </Container>
                <MovieModal closeMovieModal = {this.closeModal.bind(this)} movie={this.state.movie}
                            isModalOpened = {this.state.isModalOpened}/>
            </div>
        );
    }
}