import React from 'react'
import {connect} from 'react-redux'
import {deleteReview} from '../actions/deleteReview'

const Reviews = (props) => {


   const handleDelete = (review) => {
    props.deleteReview(review.id, review.book_id)
  }
  return (
    <div>
      {props.reviews && props.reviews.map(review =>
        <li key={review.id}>
          {review.body} -
           Review
          Star Rating: {review.star_rating}
          <button onClick={() => handleDelete(review)}>Delete</button>
        </li>
      )}
    </div>
  )

}

export default connect(null, {deleteReview})(Reviews)
