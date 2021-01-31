import React from 'react'

class BookInput extends React.Component {


  render() {
    return (
      <div>
        <form>
          <label>Book or Article Title:</label>
          <input type='text' placeholder='Title'/><br></br>
          <label>Book Author:</label>
          <input type='text' placeholder='Author'/><br></br>
          <label>Book Genre:</label>
          <input type='text' placeholder='Genre'/><br></br>
          <label>Book Link:</label>
          <input type='text' placeholder='only if applicable'/>
        </form>
      </div>
    )
  }
}


export default BookInput
