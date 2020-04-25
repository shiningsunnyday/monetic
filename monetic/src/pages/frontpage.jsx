import React from 'react';
import { Image } from 'react-bootstrap';
import logo from './images/logo.png'

export default class FrontPage extends React.Component{
  render(){
    return(
      <div>
        <Image src={logo} width={"10%"}/>
      </div>
    );
  }
}
