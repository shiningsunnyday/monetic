import React from 'react';
import { Image } from 'react-bootstrap';
import logo from './images/logo.png'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/frontpage.css'
import {
  Link,
} from "react-router-dom";
import TikTok from './tiktok'

export default class FrontPage extends React.Component{

  render() {
    var script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    document.head.appendChild(script)

    return(
      <div>
        <Image src={logo} width={"10%"}/>
        <div class="center">
          <Link to="/donate">
            <Button variant="success">Donate</Button>{' '}
          </Link>

          <Button variant="warning">Next</Button>{' '}
        </div>
        <TikTok link={'https://www.tiktok.com/oembed?url=https://www.tiktok.com/@scout2015/video/6718335390845095173'}></TikTok>
      </div>

    );
  }
}
