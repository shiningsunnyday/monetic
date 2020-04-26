import React from 'react';
import GoFundMe from './gofundme';
import Header from './header';
import firebase from '../firebase.js';

export default class Donate extends React.Component{

  state = {
    id: ""
  }

  componentDidMount() {
    let searchStr = this.props.location["search"];
    let fund = searchStr.substring(6);
    console.log(fund);
    this.setState({id: fund})

  }
  render(){
    return(
      <>
        <Header/>
        <GoFundMe id={this.state.id}/>
      </>
    );
  }
}
