import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'cvjAKhutGLYt2onyyKoYtpDZWCGA387Q';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {

    constructor() {
        super()

        this.state = {
            reviews: []
        }
    }

    fetchLatestMoviesReviews = () => {
        fetch(URL)
            .then(resp => resp.json())
            .then(json => {
                this.setState({
                    reviews: json.results ? json.results : []
                })
            })
    }

    render() {
        return <div className='latest-movie-reviews'>
            <MovieReviews reviews={this.state.reviews} />
        </div>
    }

    componentDidMount() {
        this.fetchLatestMoviesReviews()
    }
}

export default LatestMovieReviewsContainer