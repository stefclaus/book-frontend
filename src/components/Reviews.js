import React from 'react'

const Reviews = (props) => {

//state = {}

  const handleDelete = () => {
    
  }
  return (
    <div>
      {props.reviews && props.reviews.map(review =>
        <li key={review.id}>
          {review.body} -
           Review Date: {review.datetime} -
           Likes : {review.likes}
          Star Rating: {review.star_rating}
          <button onClick={handleDelete}>Delete</button>
        </li>
      )}
    </div>
  )

}

export default Reviews
