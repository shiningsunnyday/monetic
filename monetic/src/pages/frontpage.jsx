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
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import Card from './card';

export default class FrontPage extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    };
    

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    
  }

  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {

    return(
      
      <div>
        <Header/>
        <div class="center">
        <Form/>     
          {/* <DropdownButton class="dropdown" id="dropdown-basic-button" title="Request" onClick={this.showMenu}>
          {
            <div className="menu" ref={(element) => {
                this.dropdownMenu = element;
              }}
            >
              <Container>
                <Form/>
              </Container>
            </div>            
          }
       
          </DropdownButton>{' '} */}

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
