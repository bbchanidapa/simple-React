import React, { Component } from 'react'
import ImagesContainer from './Images'
import CardContentContainer from './CardContent'

class CardContainer extends Component {
  render() {
    return (
      <div>
        <p style={{color: 'pink', fontSize: 20}}>
          CardContainer
        </p>
        <ImagesContainer />
        <CardContentContainer />
      </div>
    )
  }
}

export default CardContainer
