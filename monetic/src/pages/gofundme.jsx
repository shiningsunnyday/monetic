import React from 'react';

export default class GoFundMe extends React.Component{
  render(){
    return(
      <embed height="500px" width="100%" src={this.props.link} type="text/html"></embed>
    );
  }
}
