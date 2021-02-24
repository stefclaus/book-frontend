import React from 'react'
import {connect} from 'react-redux'
import {editBook} from '../actions/editBook'
class BookEdit extends React.Component {

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
    let book = {...this.state, id: this.props.book.id}
    this.props.editBook(book)
    this.setState({
      title: '', genre: '', author: '', link: ''
    })
  }

  render() {
    return (
      <div>
        <br>
        </br>
        Edit book info:
        <form onSubmit={this.handleSubmit}>
          <label>Book or Article Title:</label>
          <input type='text' placeholder='Title' value={this.state.title} name= "title" onChange={this.handleChange}/><br></br>
          <label>Book Author:</label>
          <input type='text' placeholder='Author'value={this.state.author} name= "author"onChange={this.handleChange}/><br></br>
          <label>Book Genre:</label>
          <input type='text' placeholder='Genre' value={this.state.genre} name= "genre"onChange={this.handleChange}/><br></br>
          <label>Link To Indie Publisher:</label>
          <input type='text' placeholder='only if applicable' value={this.state.link} name= "link"onChange={this.handleChange}/><br></br>
        <input type="submit"/>
        </form>
      </div>
    )
  }
}

BookEdit.defaultProps = {
  books: {}
}

//using {addBook} is alternative to using mapdispatchtoprops. This is using thunk (Middleware)

export default connect(null, {editBook})(BookEdit)
