export const editBook = (data) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/books/${data.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(book => dispatch({type: 'EDIT_BOOK', payload: book}))
  }

}
