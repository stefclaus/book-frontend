import React from 'react'

class BookInput extends React.Component {

  //can be constructor or can use state=

  state = {title: '', genre: '', author: '', link: ''}

  //without handleChange, nothing will happen when you type in text
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form>
          <label>Book or Article Title:</label>
          <input type='text' placeholder='Title' value={this.state.title} name= "title" onChange={this.handleChange}/><br></br>
          <label>Book Author:</label>
          <input type='text' placeholder='Author'value={this.state.author} name= "author"/><br></br>
          <label>Book Genre:</label>
          <input type='text' placeholder='Genre' value={this.state.genre} name= "genre"/><br></br>
          <label>Book Link:</label>
          <input type='text' placeholder='only if applicable' value={this.state.link} name= "link"/><br></br>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}


export default BookInput
