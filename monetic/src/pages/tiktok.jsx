
import React from 'react';
import firebase from '../firebase.js';

export default class TikTok extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.tiktok);
  }

  componentWillReceiveProps() {
    this.setState({})
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
    return {__html: this.props.tiktok?.html};
  }

}
