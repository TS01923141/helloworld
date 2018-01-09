import React from "react";
import PropTypes from 'prop-types';
import { setTimeout } from "timers";

export class Home extends React.Component {
    //ES6 初始化時載入
    constructor(props){
        super();
        this.state = { 
            age : props.initialAge,
            status : 0,
            homeLink : "Changed Link"
        };
        setTimeout(() =>{
            this.setState({
                status : 1
            });
        },3000);
    }
    //使用時若使用onMakeOlder()是loading結束馬上執行 ex.onMakeOlder()
    //     若使用onMakeOlder則為觸發時才執行 ex.onClick={this.onMakeOlder}
    onMakeOlder(){
        this.setState({
            //修改自己class的資料
            age: this.state.age + 3
        });
    }

    onChangeLink(){
        this.props.changeLink(this.state.homeLink);
    }

    render(){
        console.log(this.props);
        return(
            <div>
                <p>In a new Component!</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                {/* <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button> */}
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
                <hr/>
                {/* 引用父元件的funcation */}
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
            </div>
        );
    }
} 
//告訴props該js(Home)需要有哪些propType
Home.propTypes = {
    name : PropTypes.string,
    initialAge : PropTypes.number,
    greet : PropTypes.func
};