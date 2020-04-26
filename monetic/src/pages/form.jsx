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


      console.log(this.parse_tiktok());
    }

    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }

    parse_tiktok = (tiktok) => {
      return "hi"
    }

    handleSubmit(event) {
      console.log('tiktok: ' + this.state.tiktok);
      console.log('gofundme: ' + this.state.gofundme);
      let tiktok_id = this.parse_tiktok(this.state.tiktok);
      console.log(tiktok_id);
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


          <input type="submit" value="Submit" />
        </form>
      );
    }
}
//<Button variant="success" value="Submit" type="submit">Submit</Button>{' '}
