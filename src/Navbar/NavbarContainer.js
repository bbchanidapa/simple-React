import React, { Component } from 'react'
// import logo from './logo.svg'
import Logo from './../logo.svg'
import './../App.css'

class NavbarContainer extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={Logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      </div>
    );
  }
}

export default NavbarContainer
