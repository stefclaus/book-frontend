import React from 'react'
import {connect} from 'react-redux'
import {addBook} from '../actions/addBook'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Toast from 'react-bootstrap/Toast';
import { withRouter } from 'react-router';

class BookInput extends React.Component {



  state = {title: '', genre: '', author: '', link: ''}

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBook(this.state)
    this.setState({
      title: '', genre: '', author: '', link: ''
    })
    this.props.history.push('/books');

  }

  render() {

    return (
      <div>
<h1 className="header" style={{padding: "10px"}}>Add a book</h1>

        <form onSubmit={this.handleSubmit}>


          <label>Book or Article Title:</label>
          <input type='text' placeholder='Title' value={this.state.title} name= "title" onChange={this.handleChange}/><br></br>
          <label>Book Author:</label>
          <input type='text' placeholder='Author'value={this.state.author} name= "author"onChange={this.handleChange}/><br></br>
          <label>Book Genre:</label>
          <input type='text' placeholder='Genre' value={this.state.genre} name= "genre"onChange={this.handleChange}/><br></br>
          <label>Book Link:</label>
          <input type='text' placeholder='only if applicable' value={this.state.link} name= "link"onChange={this.handleChange}/><br></br>
        <Button type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}


export default connect(null, {addBook})(BookInput)
