import React from 'react'


const Books = (props) => {
  console.log(props)
  return (
    <div>
      {props.books.map(book => <li key={book.id}>{book.title} - {book.author} Link: {book.link} Genre: {book.genre} Average Stars: {book.average_stars}</li>  )}
    </div>

  )

}



//just function bc just presenting list of account
export default Books
