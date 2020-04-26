import React from 'react';
import { Route , withRouter} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import firebase from '../firebase.js';

class Form extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        username: '',
        video_id: '',
        gofundme: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        occupation: '',
        householdsize: '',
        incomeloss: '',
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
      this.props.history.push('/');
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div>Example: https://www.tiktok.com/@deeek2/video/6813888851283545349</div>
          <div>https://www.gofundme.com/f/jtingcancerjourney</div>

          <label>
            TikTok Username (fill in deeek2):
            <input type="text" name='username' value={this.state.username} onChange={this.myChangeHandler} />
          </label>

          <label>
            TikTok Video ID (fill in 6813888851283545349):
            <input type="text" name='video_id' value={this.state.video_id} onChange={this.myChangeHandler} />
          </label>

          <p>
            GofundMe Id (fill in tingcancerjourney)
            <input type="text" name='gofundme' value={this.state.gofundme} onChange={this.myChangeHandler} />
          </p>

          <p>
            Address:
            <input type="text" name='address' value={this.state.address} onChange={this.myChangeHandler} />
          </p>

          <p>
            City:
            <input type="text" name='city' value={this.state.city} onChange={this.myChangeHandler} />
          </p>

          <p>
            State:
            <input type="text" name='state' value={this.state.state} onChange={this.myChangeHandler} />
          </p>

          <p>
            Zip Code:
            <input type="text" name='zipcode' value={this.state.zipcode} onChange={this.myChangeHandler} />
          </p>

          <p>
            Occupation:
            <input type="text" name='occupation' value={this.state.occupation} onChange={this.myChangeHandler} />
          </p>

          <p>
            Household Size:
            <input type="text" name='householdsize' value={this.state.householdsize} onChange={this.myChangeHandler} />
          </p>

          <p>
            Income loss due to Covid-19:
            <input type="text" name='incomeloss' value={this.state.incomeloss} onChange={this.myChangeHandler} />
          </p>

          <Button variant="success" value="Submit" type="submit" >Submit</Button>{' '}
          {/* <input type="submit" value="Submit" /> */}
        </form>
      );
    }
}

export default withRouter(Form);
