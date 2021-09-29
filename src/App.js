import './App.css';
import Navbar from './components/Navbar/Navbar';
import OrcaParse from './OrcaParse'
import React from 'react';
import ReactDOM from 'react-dom';
//https://reactrouter.com/web/guides/quick-start
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Pages';
import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup'


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      courses: []
    }
  }
  
  componentDidMount(){
    OrcaParse().then(retval=>{
      // console.log(retval)
      this.setState({courses: retval});
    });
  }
  
  render(){
    return(
      <div>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Router>
      </div>
      <div className="courselist">
        {this.state.courses.map(course=>{
          return(<p>{course.title}</p>);
        })}
      </div>
      </div>
    );
  }
}
