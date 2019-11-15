import React from 'react';
import {Dialog} from 'material-ui';
import posterPlaceholder from '../resources/movie_poster_placeholder.png';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import customAxios from '../httpRequests/customAxios';


const styles = {
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
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const REQUEST_HEADER_WITH_CREDENTIAL = {
    headers: {"Content-Type": "application/json", "Accept": "application/json"},
    withCredentials: true
};


export default class MovieModalContainer extends React.Component {
    componentWillReceiveProps(nextProps) {
        // If we will receive a new movieId
        if (nextProps.movieId && this.props.movieId !== nextProps.movieId) {
            nextProps.getMovieDetails(nextProps.movieId);
        }
    }

    addToFavoties() {
        customAxios.put('/media-service/v1/favourites?mediaId=' + this.props.movie.id, REQUEST_HEADER_WITH_CREDENTIAL);
    }

    render() {
        const {isModalOpened, closeMovieModal, movie} = this.props;
        const actors = (movie && movie.actors) ? movie.actors.map(genre => genre).join(', ') : '';

        let date;
        if (movie && movie.release) {
            date = new Date(movie.release);
        }

        return (
            <Dialog
                autoScrollBodyContent={true}
                title={null}
                modal={false}
                open={isModalOpened}
                onRequestClose={closeMovieModal}
            >
                {isModalOpened && <div style={styles.dialogContent(posterPlaceholder)}>
                    <h1>{movie.title}</h1>
                    <h5>{actors}</h5>
                    <p>{movie.description}</p>
                    <div>
                        <Box component="fieldset" mb={3} borderColor="transparent">
                            <Typography component="legend">Rating</Typography>
                            <Rating
                                name="customized-empty"
                                value={movie.averageRating / 20}
                                precision={1}
                                emptyIcon={<StarBorderIcon fontSize="inherit"/>}
                            />
                        </Box>
                    </div>
                    <p>Release
                        date: {date.getDay() + " " + monthNames[date.getMonth()] + " " + date.getUTCFullYear()}</p>
                    <button type="button" className="btn btn-primary" color="#ff6600"
                            onClick={this.addToFavoties.bind(this)}>Add to favorites
                    </button>
                </div>}
            </Dialog>
        );
    }
}