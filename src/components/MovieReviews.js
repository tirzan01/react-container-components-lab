// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({ reviews }) => {
    return (
        <div className='review-list'>
            {reviews.map(review => (
                <div className='review' key={review.link.url}>
                <h1>{review.display_title}</h1>
                <h3>{review.byline}</h3>
                <p>{review.summery_short}</p>
                </div>
            ))}
        </div>
        
    )
    
}

export default MovieReviews