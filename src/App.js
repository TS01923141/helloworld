import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <p>Hello world from react</p>
      </div>
    );
  }
}

class Test extends Component{
  render(){
      return(
          <div className="container">
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                <h1>Hello!</h1>
              </div>
            </div>
          </div>
      );
  }
}
//export default:定義輸出哪個class
export default App;
