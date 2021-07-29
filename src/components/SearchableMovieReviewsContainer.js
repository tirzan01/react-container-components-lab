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
    
    fetchSearchByUserInput = () => {
        fetch(`${URL}&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(json => {
            const arrayOfSearchedMovie = []
            for (let i = 0; i < json.results.length; i++) {
                arrayOfSearchedMovie.push(json.results[i].link.url)
            }
            this.setState({
                reviews: arrayOfSearchedMovie
            })
        })
    }
    
    render() {
        
        return <div className='searchable-movie-reviews'>
            <form onSubmit={e => {
                e.preventDefault()
                    this.fetchSearchByUserInput()
                }}>
                <input value={this.state.searchTerm} name='searchTerm' onChange={e => this.setState({[e.target.name]: e.target.value})} />
                <input type='submit' />
            </form>
            {this.state.reviews.map(review => <MovieReviews review={review}/>)}
        </div>
    }
}

export default SearchableMovieReviewsContainer