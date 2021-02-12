export const deleteReview = (reviewId, bookId) => {

  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/books/${bookId}/reviews/${reviewId}/`), {
      method: 'DELETE'
    })
    .then(response => dispatch({type: 'DELETE_REVIEW', reviewId: reviewId}))
  }

}
