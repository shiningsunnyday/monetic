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
    let index = parseInt(searchStr.substring(searchStr.length-1));
    const ref = firebase.database().ref();
    ref.on("value", (snapshot) => {
      let val = snapshot.val();
      let key = Object.keys(val)[index];
      const childRef = ref.child(key);
      childRef.on("value", (snapshot) => {
        let val = snapshot.val();
        let fund = val[Object.keys(val)[0]];
        this.setState({id: fund});
      })});
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
