import React, { Component } from 'react';
import logo from './logo.svg';
import './Test.css';
import { Header } from './components/Header';
import {Home} from './components/Home';

class Test extends Component{
    constructor() {
        super();
        this.state = {
            homeLink: "Home"
        };
    }

    onGreet(){
        alert("Hello!");
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }

    render(){
      return(
          <div className="container">
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                {/* <Header/> */}
                <Header homeLink={this.state.homeLink}/>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                <Home 
                name={"Max"} 
                initialAge={27} 
                /*設定子元件父元件的function*/
                greet={this.onGreet}
                changeLink={this.onChangeLinkName.bind(this)}
                />
              </div>
            </div>
          </div>
      );
    }
}
export default Test;
