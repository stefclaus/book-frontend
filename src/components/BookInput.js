import React from 'react'
import {connect} from 'react-redux'
import {addBook} from '../actions/addBook'
class BookInput extends React.Component {

  //can be constructor or can use state=

  state = {title: '', genre: '', author: '', link: ''}

  //without handleChange, nothing will happen when you type in text
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBook(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Book or Article Title:</label>
          <input type='text' placeholder='Title' value={this.state.title} name= "title" onChange={this.handleChange}/><br></br>
          <label>Book Author:</label>
          <input type='text' placeholder='Author'value={this.state.author} name= "author"onChange={this.handleChange}/><br></br>
          <label>Book Genre:</label>
          <input type='text' placeholder='Genre' value={this.state.genre} name= "genre"onChange={this.handleChange}/><br></br>
          <label>Book Link:</label>
          <input type='text' placeholder='only if applicable' value={this.state.link} name= "link"onChange={this.handleChange}/><br></br>
        <input type="submit"/>
        </form>
      </div>
    )
  }
}

//using {addBook} is alternative to using mapdispatchtoprops. This is using thunk (Middleware)

export default connect(null, {addBook})(BookInput)
