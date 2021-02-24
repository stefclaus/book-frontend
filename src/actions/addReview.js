export const addReview = (review, bookId) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/books/${bookId}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    })
    .then(response => response.json())
    .then(book => {
        if (book.error) {
          alert(book.error)
        } else {
          dispatch({type: 'ADD_REVIEW', payload: book})
        }
      }
    )
  }
}
