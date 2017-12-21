import React, { Component } from 'react'

const ImagesContainer = (props) => {
  return (
    <div>
      <img src={props.image} style={{width: "50px", height: "50px"}}/>
    </div>
  )
}

export default ImagesContainer