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
    ranked: false,
    vids: [],
    ranked_vids: [],
  }

  constructor(props) {
    super(props);
    this.nextVideo = this.nextVideo.bind(this);
  }

  nextVideo() {
    console.log("refreshing");
    let new_ind = (this.state.ind + 1)%this.state.vids.length;
    let vid_info = this.state.vids[new_ind]
    if(this.state.ranked) {
      let vid_info = this.state.ranked_vids[new_ind]
    }
    let link = 'https://www.tiktok.com/@' + vid_info[0] + '/video/' + vid_info[1];
    fetch('https://www.tiktok.com/oembed?url=' + link)
    .then(res => res.json())
    .then((data) => {
      if(this.state.ranked) {
        this.setState({ranked_tiktok: data, ind:new_ind});
      } else {
        this.setState({
          tiktok: data,
          ind: new_ind
        })
      }})
  }


  generateVideos(vals, keys) {
    var arr = [];
    for(const [i, vids] of Object.entries(vals)) {
      for(const [vid_id, fund] of Object.entries(vids)) {
        arr.push([i, vid_id, fund]);
      }
    }
    var vids = [];
    let numKeys = arr.length;
    while(vids.length < 5){
      var r = Math.floor(Math.random() * numKeys);
      if(vids.indexOf(arr[r]) === -1) vids.push(arr[r]);
    }
    let ranked_vids = vids.slice(0);
    ranked_vids = vids.slice(0).sort(function(a,b){return a[0].length-b[0].length});
    console.log(vids, ranked_vids)
    return {vids: vids, ranked: ranked_vids};
  }

  componentDidMount() {
    const ref = firebase.database().ref();
    ref.orderByKey().on("value", (snapshot) => {
      let vals = snapshot.val();
      let keys = Object.keys(vals);
      let all_vids = this.generateVideos(vals, keys);
      let vids = all_vids.vids
      let ranked = all_vids.ranked
      let link = 'https://www.tiktok.com/@' + vids[0][0] + '/video/' + vids[0][1];
      fetch('https://www.tiktok.com/oembed?url=' + link)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          tiktok: data,
          ranked_vids: ranked,
          vids: vids,
        })})
      .then(()=>{
        let ranked_link = 'https://www.tiktok.com/@' + this.state.ranked_vids[0][0] + '/video/' + this.state.ranked_vids[0][1];
        fetch('https://www.tiktok.com/oembed?url=' + ranked_link)
        .then(res => res.json())
        .then((data) => {
          this.setState({
            ranked_tiktok: data,
          })
          console.log(this.state);
        })
      })
      .catch(console.log);

    });

  }

  render() {
    let tiktok;
    if(this.state.ranked) {
      tiktok = <TikTok tiktok={this.state.ranked_tiktok}></TikTok>
    } else {
      tiktok = <TikTok tiktok={this.state.tiktok}></TikTok>
    }
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
          <Button onClick={() => {this.setState({ranked: true})}}>Rank by need</Button>{' '}
        </div>
        {tiktok}
      </div>

    );
  }
}
