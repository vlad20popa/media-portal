import React, { Component } from 'react';
import {Container, Row} from 'react-bootstrap/';
import MoviesList from '../components/movieList';
import MovieModal from '../components/movieModal';
import customAxios from '../httpRequests/customAxios';

const REQUEST_HEADER_WITH_CREDENTIAL = { headers: { "Content-Type":"application/json", "Accept":"application/json" }, withCredentials: true };

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            isModalOpened: false,
            movies: null
        };
    }

    async componentDidMount() {
        let movies = await  customAxios.get('media-service/v1/GetMedia', REQUEST_HEADER_WITH_CREDENTIAL);
        this.setState({...this.state, movies: movies.data});
    }

    async componentDidUpdate(prevProps, prevState, sanapshot){
        if(prevProps.location.query !== this.props.location.query){
            let movies = await  customAxios.get('media-service/v1/GetMedia?title='+ this.props.location.query, REQUEST_HEADER_WITH_CREDENTIAL);

            this.setState({...this.state, movies: movies.data});
        }
    }

    openModal(movie){
        this.setState({...this.state, isModalOpened: true, movie: movie} )
    }

    closeModal(){
        this.setState({...this.state, isModalOpened: false} )
    }

    render() {
        return (
            <div style={{marginTop: '100px'}}>
                <Container>
                    <Row>
                        <MoviesList movies={this.state.movies} openModal={this.openModal.bind(this)}/>
                    </Row>
                </Container>
                <MovieModal closeMovieModal={this.closeModal.bind(this)} movie={this.state.movie}
                            isModalOpened={this.state.isModalOpened}/>
            </div>
        );
    }
}