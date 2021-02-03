import React from 'react'
import Book from './Book'

const Books = (props) => {
  console.log(props)
  return (
    <div>
      {props.books.map(book =>
        <div key={book.id}><Book book={book} /></div> )}
    </div>
  )

}



//just function bc just presenting list of account
export default Books
