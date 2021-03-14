import React from 'react'


class LikeButton extends React.Component {

  state = {
    count: 0
  }

  increaseCount = () => {
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }

  render () {
    return (
      <div>
          <button onClick= {this.increaseCount}> Likes: {this.state.count} </button>
      </div>

    )
  }
}

export default LikeButton;
