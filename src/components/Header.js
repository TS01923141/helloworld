import React from "react";
import {Component} from 'react';
//將不會改變的class設為stateLess(無狀態)
//設為無狀態將使應用速度更快

// export class Header extends Component {
export const Header = (props) => {
    // render(){
        return(
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navvar-nav">
                            {/* <li><a href="#">Home</ a></li> */}
                            <li><a href="#">{props.homeLink}</ a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    // }
// }
};