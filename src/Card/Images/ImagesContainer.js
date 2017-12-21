import React, { Component } from 'react'

class ImagesContainer extends Component {
  render() {
    return (
      <div>
        <img src={this.props.pic} style={{width: "50px"}}/>
      </div>
    )
  }
}

export default ImagesContainer