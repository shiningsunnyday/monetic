import React from 'react';
import Header from './header';
import Form from './form';

export default class Signup extends React.Component{
  render(){
    return(
      <>
        <Header/>
        <div class='center'>
          <Form/>
        </div>
        
      </>
    );
  }
}
