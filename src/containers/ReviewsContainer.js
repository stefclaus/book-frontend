import React from 'react'
import {Redirect} from 'react-router-dom'
import ReviewInput from '../components/ReviewInput'
import Reviews from '../components/Reviews'

class ReviewsContainer extends React.Component {


  render (){
    return (
      <div>
      <ReviewInput/>
      <Reviews/>

      </div>
    )
  }

}

export default ReviewsContainer
