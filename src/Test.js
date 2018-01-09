import React, { Component } from 'react';
import logo from './logo.svg';
import './Test.css';
import { Header } from './components/Header';
import {Home} from './components/Home';

class Test extends Component{
  render(){
      //
      var user={
          name: "Anna",
          hobbies: ["Sports", "Reading"]
      }
      return(
          <div className="container">
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                <Header/>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                <Home name={"Max"} age={27} user={user} >
                    <p>This is a paragraph!</p>
                </Home>
              </div>
            </div>
          </div>
      );
  }
}
export default Test;