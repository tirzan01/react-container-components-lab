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
        fetch(`${URL}`)
            .then(resp => resp.json())
            .then(json => {
                const arrayOfMovies = []
                for (let i = 0; i < json.results.length; i++) {
                    arrayOfMovies.push(json.results[i].link.url)
                }
                this.setState(prevState => {
                    return {reviews: arrayOfMovies}
                })
            })
    }

    render() {
        return <div className='latest-movie-reviews'>
            {this.state.reviews.map((review, i) => <MovieReviews key={i} review={review}/>)}
        </div>
    }

    componentDidMount() {
        this.fetchLatestMoviesReviews()
    }
}

export default LatestMovieReviewsContainer