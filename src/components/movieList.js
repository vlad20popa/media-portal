import React from 'react';
import {Row, Col} from 'react-bootstrap';
import MovieCard from '../components/movieCard';

const styles = {
    movieColumn: {
        marginBottom: 20
    }
};
const MovieList = ({movies, openModal}) => {
    const movieColumns = movies ? movies.map(movie => (
            <Col style={styles.movieColumn} key={movie.id} xs={12} sm={4} md={3} lg={3}>
                <MovieCard movie={movie} openModal={openModal}/>
            </Col>
    )) : null;

    return (
        <Row>
            {movieColumns}
        </Row>
    );
};

export default MovieList;