import React from 'react';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/frontpage.css'
import {
  Link,
} from "react-router-dom";
import TikTok from './tiktok'
import Form from './form'
import Header from './header';
import Dropdown from 'react-bootstrap'

// import Card from './card';

export default class FrontPage extends React.Component{
  state = {
    index: 0,
  }

  constructor(props) {
    super(props);
  
  }
  
  render() {

    return(
      
      <div>
        <Header/>
        <div class="center">
          <Link to={{pathname: "/signup"}}>
            <Button variant="primary">Request</Button>
          </Link>{' '}

          <Link to={{pathname: "/donate",search: "?fund="+this.state.index}} target="_blank">
            <Button variant="success">Donate</Button>
          </Link>{' '}
          
          <Button variant="warning">Next</Button>{' '}
        </div>

        <TikTok updateFund={(ind)=>this.setState({index: ind})}></TikTok>
      </div>

    );
  }
}
