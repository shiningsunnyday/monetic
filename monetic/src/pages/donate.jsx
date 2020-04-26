import React from 'react';
import GoFundMe from './gofundme';

export default class Donate extends React.Component{
  render(){
    return(
      <GoFundMe link="https://www.gofundme.com/mvc.php?route=widgets/mediawidget&fund=monetic&image=1&coinfo=1&preview=1"/>
    );
  }
}
