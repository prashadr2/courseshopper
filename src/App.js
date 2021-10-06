import './App.css';
import Navbar from './components/Navbar/Navbar';
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
import SearchResult from './components/SearchResult/SearchResult';
import CourseList from './components/Course/CourseList';
import OrcaParse from './OrcaParse';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state  = {
      usertags: [],
      courses: []
    }
  }

  componentDidMount(){
   
  }

  addtag(tag){
    this.setState({
      tags: this.state.usertags.concat(tag)
    })
  }

  render(){
    return(
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/searchresult" component={SearchResult} />
          </Switch>
        </Router>
      </div>
    );
  }
}
