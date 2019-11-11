import React from 'react';
import { Dialog } from 'material-ui';
import posterPlaceholder from '../resources/movie_poster_placeholder.png';

const styles = {
    // Can use functions to dynamically build our CSS
    dialogContent: (backgroundUrl) => ({
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        height: '100%',
        minHeight: 400,
        color: 'white',
        padding: 10
    })
}

export default class MovieModalContainer extends React.Component {
    // Triggered right after a property is changed
    componentWillReceiveProps(nextProps) {
        // If we will receive a new movieId
        if (nextProps.movieId && this.props.movieId !== nextProps.movieId) {
            nextProps.getMovieDetails(nextProps.movieId);
        }
    }

    render() {
        const {isModalOpened, closeMovieModal, movie} = this.props;
        // const movie = movieHelpers.updateMoviePictureUrls(this.props.movie);
        const actors = (movie && movie.actors) ? movie.actors.map(genre => genre).join(', ') : '';

        return (
            <Dialog
                autoScrollBodyContent={true}
                title={null}
                modal={false}
                open={isModalOpened}
                onRequestClose={closeMovieModal}
            >
                { isModalOpened && <div style={styles.dialogContent(posterPlaceholder)}>
                    <h1>{movie.title}</h1>
                    <h5>{actors}</h5>
                    <p>{movie.description}</p>
                    <p>Rating: {movie.averageRating}</p>
                    <p>Release date: ${movie.release}</p>
                    {/*<div className={"bordered-button"} >*/}
                        {/*<label className={"bold-text size-24 bordered-button-text"}>Add to favorites</label>*/}
                    {/*</div>*/}
                    <button type="button" className="btn btn-primary" color="#ff6600">Add to favorites</button>
                </div>}
            </Dialog>
        );
    }
}