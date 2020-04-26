import React from 'react';
import { Image } from 'react-bootstrap';
import logo from './images/logo.png'
import {
    Link,
  } from "react-router-dom";

export default class Header extends React.Component{
  render(){
    return(
        <Link to="/">
            <Image src={logo} width={"10%"}/>
        </Link>
    );
  }
}

