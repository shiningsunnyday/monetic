import React from 'react';
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
import Header from './header';

export default class FrontPage extends React.Component{

  constructor(props) {
    super(props);
  }



  render() {

    return(
      <div>
        <Header/>
        <div class="center">


          <DropdownButton class="dropdown" id="dropdown-basic-button" title="Request">
            <Dropdown.Item><Form /></Dropdown.Item>
          </DropdownButton>{' '}

          <Link to="/donate" target="_blank">
            <Button variant="success">Donate</Button>
          </Link>{' '}
          <Button variant="warning">Next</Button>{' '}
        </div>
        <TikTok></TikTok>
      </div>

    );
  }
}
