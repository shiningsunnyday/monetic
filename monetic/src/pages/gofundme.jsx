import React from 'react';
export default class GoFundMe extends React.Component{
  render(){
    if ((this.props.id).length > 0) {
    return(
      <div>
        <embed height="600px" width="100%" src={"https://www.gofundme.com/f/" + this.props.id + "/widget/large"} type="text/html"></embed>
      </div>
    );
    } else {
      return <div/>
    }
  }
}
