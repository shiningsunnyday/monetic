
import React from 'react';

export default class TikTok extends React.Component {
  state = {
    tiktoks: []
  }

  componentDidMount() {
    fetch('https://www.tiktok.com/oembed?url=' + this.props.link)
    .then(res => res.json())
    .then((data) => {
      this.setState({ tiktoks: data })
    })
    .catch(console.log)
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