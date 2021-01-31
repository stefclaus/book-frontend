import React from 'react'

class BookInput extends React.Component {

  //can be constructor or can use state=

  state = {title: '', genre: '', author: '', link: ''}

  render() {
    return (
      <div>
        <form>
          <label>Book or Article Title:</label>
          <input type='text' placeholder='Title' value={this.state.title}/><br></br>
          <label>Book Author:</label>
          <input type='text' placeholder='Author'value={this.state.author}/><br></br>
          <label>Book Genre:</label>
          <input type='text' placeholder='Genre' value={this.state.genre}/><br></br>
          <label>Book Link:</label>
          <input type='text' placeholder='only if applicable' value={this.state.link}/>
        </form>
      </div>
    )
  }
}


export default BookInput
