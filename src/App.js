import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarContainer from './Navbar'
import FooterConatiner from './Footer'
import ContentContainer from './Content'
import CardContainer from './Card'

class App extends Component {
  render() {
    return (
      <div>
        <NavbarContainer />
        <ContentContainer />
        <CardContainer />
        <FooterConatiner />
      </div>
    )
  }
}

export default App;
