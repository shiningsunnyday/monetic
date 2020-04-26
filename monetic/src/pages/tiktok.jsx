
import React from 'react';
import firebase from '../firebase.js';

export default class TikTok extends React.Component {
  state = {
    tiktoks: []
  }

  componentDidMount() {

    const ref = firebase.database().ref();
    ref.on("value", (snapshot) => {
      let val = snapshot.val();
      let numKeys = Object.keys(val).length
      let index = Math.floor(Math.random() * numKeys);
      let key = Object.keys(val)[index];
      const childRef = ref.child(key);
      childRef.on("value", (snapshot) => {
        let val = snapshot.val();
        let link = 'https://www.tiktok.com/@' + key + '/video/' + Object.keys(val)[0];
        fetch('https://www.tiktok.com/oembed?url=' + link)
        .then(res => res.json())
        .then((data) => {
          this.setState({ tiktoks: data })
        })
        .catch(console.log);

      })});
  }

  render() {
    var script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    document.head.appendChild(script)


    return(
      <div dangerouslySetInnerHTML={this.createHTML()} />
    );
  }

  createHTML() {
    return {__html: this.state.tiktoks?.html};
  }

}
