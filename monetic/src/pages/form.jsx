import React from 'react';
import { Button } from 'react-bootstrap';

export default class Form extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        tiktok: '',
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

          <Button variant="success" value="Submit" type="submit">Submit</Button>{' '}
          {/* <input type="submit" value="Submit" /> */}
        </form>
      );
    }
}