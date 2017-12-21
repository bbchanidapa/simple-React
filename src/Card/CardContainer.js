import React, { Component } from 'react'
import ImagesContainer from './Images'
import CardContentContainer from './CardContent'

class CardContainer extends Component {
  constructor(props){
    super(props)
    
  }
  componentDidMount(){

  }

  render() {
    const {id, name, pic, description} = this.props
    console.log(this.props)
    return (
      <div style={{
        backgroundColor: 'blue', 
        width: "50%",
        border: "3px solid green",
        padding: "10px",
      }}>
        <p style={{color: 'pink', fontSize: 20}}>
          {name}
        </p>
        <ImagesContainer image={pic}/>
        <CardContentContainer description={description}/>
      </div>
    )
  }
}

export default CardContainer
