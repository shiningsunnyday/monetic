import React from 'react';
import { Button } from 'react-bootstrap';
import firebase from '../firebase.js';

export default class Form extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        username: '',
        video_id: '',
        gofundme: '',
      };

      this.handleChange = this.myChangeHandler.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);



    }

    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }


    handleSubmit(event) {
      console.log('tiktok: ' + this.state.tiktok);
      console.log('gofundme: ' + this.state.gofundme);

      event.preventDefault();

      const ref = firebase.database().ref(this.state.username);
      ref.set(this.state.video_id);
      ref.child(this.state.video_id).set(this.state.gofundme);
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            TikTok Username (e.g. deeek2):
            <input type="text" name='username' value={this.state.username} onChange={this.myChangeHandler} />
          </label>

          <label>
            TikTok Video ID (e.g. 6813888851283545349):
            <input type="text" name='video_id' value={this.state.video_id} onChange={this.myChangeHandler} />
          </label>

          <p>
            GofundMe Id (e.g. monetic)
            <input type="text" name='gofundme' value={this.state.gofundme} onChange={this.myChangeHandler} />
          </p>


          <input type="submit" value="Submit" />
        </form>
      );
    }
}
//<Button variant="success" value="Submit" type="submit">Submit</Button>{' '}
