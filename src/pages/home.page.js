import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap/';
import AppBar from 'material-ui/AppBar';
import MoviesList from '../components/movieList';
import { movies } from '../resources/movies';
import * as movieListUtils from '../components/utils/movieListUtils';
import MovieModal from '../components/movieModal';



export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            isModalOpened: false,
            movie: null
        };
        // Binds the handleScroll to this class (MovieBrowser)
        // which provides access to MovieBrowser's props
        // Note: You don't have to do this if you call a method
        // directly from a lifecycle method or define an arrow function
        // this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        // window.onscroll = this.handleScroll;
    }

    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }

    // handleScroll() {
    //     const {topMovies} = this.props;
    //     if (movies) {
    //         let percentageScrolled = movieListUtils.getScrollDownPercentage(window);
    //         if (percentageScrolled > .8) {
    //             const nextPage = this.state.currentPage + 1;
    //             this.props.getTopMovies(nextPage);
    //             this.setState({currentPage: nextPage});
    //         }
    //     }
    // }

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
                        <p>Search will go here</p>
                    </Row>
                    <Row>
                        <MoviesList movies={movies} openModal = {this.openModal.bind(this)}/>
                    </Row>
                </Container>
                <MovieModal closeMovieModal = {this.closeModal.bind(this)} movie={this.state.movie}
                            isModalOpened = {this.state.isModalOpened}/>
            </div>
        );
    }
}