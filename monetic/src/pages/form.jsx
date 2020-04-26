import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import firebase from '../firebase.js';
import './css/form.css';

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
        income: '',
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
      const ref = firebase.database().ref('content/'+this.state.username);
      ref.set(this.state.video_id);
      ref.child(this.state.video_id).set(this.state.gofundme);
      this.props.history.push('/');
      const info_ref = firebase.database().ref('user_info/'+this.state.username);
      info_ref.set("state")
      info_ref.child("state").set(this.state.state.toLowerCase());
      this.props.history.push("/user")
    }

    render() {
      return (
        <div class="container">
          <form onSubmit={this.handleSubmit} id="contact">
          <h3>Request Form</h3>
          <h4>Fill out this form to start using Monetic!</h4>
            <p>
              <input placeholder="TikTok Username (fill in deeek2)" type="text" name='username' value={this.state.username} onChange={this.myChangeHandler} required />
            </p>

            <p>
              <input placeholder="TikTok Video ID (fill in 6813888851283545349)" type="text" name='video_id' value={this.state.video_id} onChange={this.myChangeHandler} required />
            </p>

            <p>
              <input placeholder="GoFundMe ID (fill in jtingcancerjourney)" type="text" name='gofundme' value={this.state.gofundme} onChange={this.myChangeHandler} required/>
            </p>

            <p>
              <input placeholder="Address" type="text" name='address' value={this.state.address} onChange={this.myChangeHandler} />
            </p>

            <p>
              <input placeholder="City" type="text" name='city' value={this.state.city} onChange={this.myChangeHandler} />
            </p>

            <p>
              <input placeholder="State Initials (e.g. CA)" type="text" name='state' value={this.state.state} onChange={this.myChangeHandler} />
            </p>

            <p>
              <input placeholder="Zip Code" type="text" name='zipcode' value={this.state.zipcode} onChange={this.myChangeHandler} />
            </p>

            <p>
              <input placeholder="Occupation" type="text" name='occupation' value={this.state.occupation} onChange={this.myChangeHandler} />
            </p>

            <p>
              <input placeholder="Income" type="text" name='income' value={this.state.income} onChange={this.myChangeHandler} />
            </p>

            <p>
              <input placeholder="Household Size" type="text" name='householdsize' value={this.state.householdsize} onChange={this.myChangeHandler} />
            </p>

            <p>

              <input placeholder="Income loss due to COVID-19" type="text" name='incomeloss' value={this.state.incomeloss} onChange={this.myChangeHandler} />
            </p>

            <Button variant="success" value="Submit" type="submit" >Submit</Button>{' '}
            {/* <input type="submit" value="Submit" /> */}
          </form>




        </div>

      );
    }
}

export default withRouter(Form);
