import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/frontpage.css'
import {
  Link,
} from "react-router-dom";
import TikTok from './tiktok'
import Header from './header';
import firebase from '../firebase.js';

// import Card from './card';

export default class FrontPage extends React.Component{
  state = {
    ind: 0,
  }

  constructor(props) {
    super(props);
    this.nextVideo = this.nextVideo.bind(this);
      
  }

  nextVideo() {
    console.log("refreshing");
    this.componentDidMount();
    
  }

  componentDidMount() {
    const ref = firebase.database().ref();
    ref.on("value", (snapshot) => {
      let val = snapshot.val();
      let numKeys = Object.keys(val).length
      
      console.log("last ind: " + this.state.ind);
      let index = Math.floor(Math.random() * numKeys);
      if (index === this.state.ind) {
        
        index = Math.floor(Math.random() * numKeys);
        console.log("collison. Generating new index: " + index);
      }

      let key = Object.keys(val)[index];
      const childRef = ref.child(key);
      childRef.on("value", (snapshot) => {
        let val = snapshot.val();
        let link = 'https://www.tiktok.com/@' + key + '/video/' + Object.keys(val)[0];
        fetch('https://www.tiktok.com/oembed?url=' + link)
        .then(res => res.json())
        .then((data) => {
          this.setState({ 
            tiktoks: data,
            ind: index,   
          })
        })
        .catch(console.log);
      })});
  }
  
  render() {

    return(
      
      <div>
        <Header/>
        <div class="center">
          <Link to={{pathname: "/signup"}}>
            <Button variant="primary">Request</Button>
          </Link>{' '}

          <Link to={{pathname: "/donate",search: "?fund="+this.state.ind}} target="_blank">
            <Button variant="success">Donate</Button>
          </Link>{' '}
          
          <Button variant="warning" onClick={this.nextVideo}>Next</Button>{' '}
        </div>

        <TikTok tiktoks={this.state.tiktoks}></TikTok>
      </div>

    );
  }
}
