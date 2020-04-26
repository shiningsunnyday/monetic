import React from 'react';
import GoFundMe from './gofundme';
import Header from './header';

export default class Donate extends React.Component{
  render(){
    return(
      <>
        <Header/>  
        <GoFundMe id="monetic"/>
      </>
    );
  }
}
