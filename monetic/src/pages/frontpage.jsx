import React from 'react';
import { Image } from 'react-bootstrap';
import logo from './images/logo.png'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/frontpage.css'
import {
  Link,
} from "react-router-dom";
import TikTok from './tiktok'
import Form from './form'

export default class FrontPage extends React.Component{

  render() {
    return(
      <div>
        <Image src={logo} width={"10%"}/>
        <div class="center">
        

          <DropdownButton class="dropdown" id="dropdown-basic-button" title="Request">
            <Dropdown.Item><Form /></Dropdown.Item>
          </DropdownButton>
        
          <Link to="/donate">
            <Button variant="success">Donate</Button>{' '}
          </Link>
          <Button variant="warning">Next</Button>{' '}
        </div>
        <TikTok link={'https://www.tiktok.com/@scout2015/video/6718335390845095173'}></TikTok>
      </div>

    );
  }
}
