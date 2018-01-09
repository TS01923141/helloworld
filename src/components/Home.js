import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
    render(){
        var text = "Something!";
        console.log(this.props);
        return(
            <div>
                <p>In a new Component!</p>
                /*印出Home的變數 */
                <p>{text}</p>
                /*印出Home在props的變數 */
                <p>Your name is {this.props.name}, your age is {this.props.age}</p>
                /*印出Home所在的props的變數user的name變數 */
                <p>User Object => Name: {this.props.user.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    /* 迴圈用法，印出hobbies，命名為hobby，key為i(第i個 從0開始) */
                    <ul>
                        {this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <hr/>
                /* 從home取出children */
                {this.props.children}
            </div>
        );
    }
} 
//告訴props該js(Home)需要有哪些propType
Home.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    user : PropTypes.object,
    children : PropTypes.element.isRequired
};