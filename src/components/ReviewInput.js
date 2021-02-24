import React from 'react'
import {connect} from 'react-redux'
import {addReview} from '../actions/addReview'

class ReviewInput extends React.Component {

//can hold the state in the redux store or here in your local state
  state = {body: '', star_rating: '5 stars', likes: '', datetime: ''}

//without handle change, the text will be blank
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addReview(this.state, this.props.book.id)
    this.setState({
      body: '', star_rating: '5 stars', likes: '', datetime: ''
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <br></br><br></br><br></br>
          <label>Your Review:</label>
          <input type="text" name="body" value={this.state.body} onChange={this.handleChange}></input>
          <select name="star_rating" value={this.state.star_rating} onChange={this.handleChange}>
            <option>1 star</option>
            <option>2 star</option>
            <option>3 star</option>
            <option>4 star</option>
            <option>5 star</option>

          </select>
          <input type="submit"/>

        </form>
      </div>
    )
  }

}

export default connect(null, {addReview})(ReviewInput)
