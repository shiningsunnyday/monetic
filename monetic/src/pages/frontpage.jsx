import React from 'react';
import { Image } from 'react-bootstrap';
import logo from './images/logo.png'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/frontpage.css'
import {
  Link,
} from "react-router-dom";
import TikTok from './tiktok';




export default class FrontPage extends React.Component{

  constructor(props) {
    super(props);
  }



  render() {

    return(
      <div>
        <Image src={logo} width={"10%"}/>
        <div class="center">
          <Link to="/donate">
            <Button variant="success">Donate</Button>{' '}
          </Link>
          <Button variant="warning">Next</Button>{' '}
        </div>
        <TikTok></TikTok>
      </div>

    );
  }
}
