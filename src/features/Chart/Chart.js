import React, { Component } from 'react'
import 'react-mdl/extra/material.css'
import 'react-mdl/extra/material.js'

class Chart extends Component {
  render() {
    return (
      <div>
				<button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
					<i class="material-icons">add</i>
				</button>
      </div>
    )
  }
}

export default Chart