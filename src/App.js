import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarContainer from './Navbar'
import FooterConatiner from './Footer'
import ContentContainer from './Content'
import CardContainer from './Card'
import data from './../src/data.json'

class App extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){

  }

  card = () => {
    return (
      data.map((item)=>{
        return <CardContainer {...item}/>
      }) 
    )
  }

  render() {
    return (
      <div>
        <NavbarContainer />
        <ContentContainer />
        {this.card()}
        <FooterConatiner />
      </div>
    )
  }
}

export default App;
