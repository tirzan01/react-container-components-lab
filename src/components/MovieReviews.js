// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({review}) => {
    return (<div className='review-list'>
            <p className='review'>by {review}</p>
        </div>)
    
}

export default MovieReviews