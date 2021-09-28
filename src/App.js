import './App.css';
import React, { Component } from "react";
import OrcaParse from "./OrcaParse"

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      courses: []
    }
  }

  componentDidMount(){
    OrcaParse().then(ret =>{
      // console.log(ret);
      this.setState({courses: ret});
    });
  }

    render(){
      console.log(this.state.courses); //when state is set in componentdidmount after orcaparse is done, the app will re-render
      return (
            <div className="App">
              <header className="App-header">
                {this.state.courses.map(obj=>{
                  return(
                    <p>{obj.title}</p>
                  );
                })}
              </header>
            </div>
          );
    }
}