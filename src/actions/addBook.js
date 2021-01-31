export const addBook = (data) => {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/books', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })

  }

}
