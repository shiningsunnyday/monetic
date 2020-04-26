import React from 'react';

export default class GoFundMe extends React.Component{
  render(){
    return(
      <div>
        <embed height="600px" width="100%" src={"https://www.gofundme.com/f/" + this.props.id + "/widget/large"} type="text/html"></embed>
      </div>
    );
  }
}

