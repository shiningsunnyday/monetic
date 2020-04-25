import React from 'react';
import ReactDOM from 'react-dom';
import { Image } from 'react-bootstrap';
import logo from './images/logo.png'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/frontpage.css'
import CheckoutForm from './CheckoutForm';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

export default class FrontPage extends React.Component{
  
  render(){
    

  
    return(
      <div>
        <Image src={logo} width={"10%"}/>
        
        <div class="center">
          {App()}
          <Button variant="success">Donate</Button>{' '}
          <Button variant="warning">Next</Button>{' '}
        </div>
        <div dangerouslySetInnerHTML={createHTML()} />        
      </div>
      
    );
  }
}

const stripePromise = loadStripe("pk_test_luUrErLrBJqDXD6vLYtJUG3p00wgm9TCkY");

var script = document.createElement("script");
script.src = "https://www.tiktok.com/embed.js";
document.head.appendChild(script)

function App() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

function createHTML() {
  return {__html: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@emwng/video/6819067578699222278" data-video-id="6819067578699222278" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@emwng" href="https://www.tiktok.com/@emwng">@emwng</a> <p>It really do be like that tho. <a title="dogsoftiktok" target="_blank" href="https://www.tiktok.com/tag/dogsoftiktok">##dogsoftiktok</a> <a title="rescuedog" target="_blank" href="https://www.tiktok.com/tag/rescuedog">##rescuedog</a> <a title="corgi" target="_blank" href="https://www.tiktok.com/tag/corgi">##corgi</a> <a title="dogmomlife" target="_blank" href="https://www.tiktok.com/tag/dogmomlife">##dogmomlife</a></p> <a target="_blank" title="♬ original sound - anoushaxo" href="https://www.tiktok.com/music/original-sound-6797011418848725765">♬ original sound - anoushaxo</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>'};
}
