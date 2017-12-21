import React, { Component } from 'react'

class ImagesContainer extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} style={{width: "50px", height: "50px"}}/>
      </div>
    )
  }
}

export default ImagesContainer