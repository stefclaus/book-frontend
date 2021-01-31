import React from 'react'


const Books = (props) => {
  console.log(props)
  return (
    <div>
      {props.books.map(book => <li key={book.id}>{book.title} - {book.author}</li> )}
    </div>

  )

}



//just function bc just presenting list of account
export default Books
