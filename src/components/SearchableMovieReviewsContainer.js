import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'cvjAKhutGLYt2onyyKoYtpDZWCGA387Q';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()

        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    handleChange = e => {
        this.setState({
            searchTerm: e.target.value
        })
    }
    
    fetchSearchByUserInput = () => {
        fetch(`${URL}&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                reviews: json.results ? json.results : [],
                searchTerm: ''
            })
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.fetchSearchByUserInput()
    }
    
    render() {
        
        return <div className='searchable-movie-reviews'>
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.searchTerm} name='searchTerm' onChange={this.handleChange} />
                <input type='submit' />
            </form>
            <MovieReviews reviews={this.state.reviews} />
        </div>
    }
}

export default SearchableMovieReviewsContainer