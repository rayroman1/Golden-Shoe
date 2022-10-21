import React, { Component } from 'react';
import APIService from 'C:/React/discountshoes/src/server/APIService.js';

class Home extends React.Component  {


 /* var a = APIService.getBooks();*/
 constructor(props) {
  super(props)
 this.state = {
  accounts: []
};}

componentDidMount(){
    APIService.getBooks().then((data) => {
        this.setState({ accounts: data })
        console.log('iuyi ',this.state.accounts)
      }).catch(function (ex) {
              console.log('Response parsing failed. Error: ', ex);
          })
     ;;
    

        }



     
        render() { return <h2>Home {this.state.accounts.data}</h2>;}
  
  }
  
  
  export default Home;