import React from 'react';
import { Route , withRouter} from 'react-router-dom';
import { Button } from 'react-bootstrap';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiktok: '',
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
      console.log('state: ' + this.state.tiktok);
      console.log('state: ' + this.state.address);
      event.preventDefault();  
      this.props.history.push('/');
    }

    
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            TikTok Link:
            <input type="text" name='tiktok' value={this.state.tiktok} onChange={this.myChangeHandler} />
          </label>

          <p>
            GofundMe Id:
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