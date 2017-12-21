import React, { Component } from 'react'

class CardContentContainer extends Component {
  render() {
    return (
      <div>
        <p style={{color: 'pink', fontSize: 10}}>
          {this.props.description}
        </p>
      </div>
    )
  }
}

export default CardContentContainer