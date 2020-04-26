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
      vid_info = this.state.ranked_vids[new_ind]
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


  generateAndSortVideos(vals, keys, states_ranking, user_info) {
    console.log(user_info)
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
    ranked_vids = vids.slice(0).sort(function(a,b){return states_ranking[user_info[a[0]]["state"]]-states_ranking[user_info[b[0]]["state"]]});
    console.log(vids, ranked_vids)
    return {vids: vids, ranked: ranked_vids};
  }

  componentDidMount() {
    const ref = firebase.database().ref('content');
    const ranking_ref = firebase.database().ref('general_info/state_priority');
    const user_info_ref = firebase.database().ref('user_info');
    let states_ranking;
    let user_info;
    ranking_ref.on("value", (snapshot) => {
      states_ranking = snapshot.val();

    });
    user_info_ref.on("value", (snapshot) => {
      user_info = snapshot.val();
      console.log("user_info", user_info);
    });
    ref.orderByKey().on("value", (snapshot) => {
      let vals = snapshot.val();
      let keys = Object.keys(vals);
      let all_vids = this.generateAndSortVideos(vals, keys, states_ranking, user_info);
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
    var fund_name = "";
    if(this.state.ranked) {
      tiktok = <TikTok tiktok={this.state.ranked_tiktok}></TikTok>;
      let cols = this.state.vids.map(row => row[0]);
      for(var i=0; i<cols.length; i++) {
        if(this.state.ranked_vids[this.state.ind][0] === cols[i]) fund_name = this.state.vids[i][2];
      }
      console.log(this.state.vids, this.state.ranked_vids, fund_name);
    } else {
      tiktok = <TikTok tiktok={this.state.tiktok}></TikTok>;
      if(this.state.vids.length > 0) {
        fund_name = this.state.vids[this.state.ind][2];
      }
    }
    return(
      <div>
        <Header/>
        <div class="center">
          <Link to={{pathname: "/signup"}}>
            <Button variant="primary">Request</Button>
          </Link>{' '}
          <Link to={{pathname: "/donate",search: "?fund="+fund_name}} target="_blank">
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
