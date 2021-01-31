

export function fetchBooks(){
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/books')
      .then(response => response.json())
      .then(books => dispatch({
        type: 'FETCH_BOOKS',
        payload: books
      }))
}

}
