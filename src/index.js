import React from 'react';
import ReactDOM from 'react-dom';
import {Render} from "react-dom";
import './index.css';
import App from './App';
import Test from './Test';
import registerServiceWorker from './registerServiceWorker';

import {Header} from "./components/Header";
import {Home} from "./components/Home";

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Test />, document.getElementById("test"));
registerServiceWorker();

