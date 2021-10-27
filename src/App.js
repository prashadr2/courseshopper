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

import Home from './components/Pages/home';
import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup'
import SearchResult from './components/SearchResult/SearchResult';
import CoursePage from './components/Course/CoursePage'
import CourseCart from './components/Course/CourseCart'
import Maintags from './components/Pages/Maintags'
import MaintagFilterList from './components/Pages/MaintagFilterList'

import OrcaParse from './OrcaParse';
import { useSelector, useDispatch, connect } from 'react-redux'
import { update } from './orcaSlice'

class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    OrcaParse().then(retval=>{
      //do post request here to get db tags
      //map over retval, add tags attribute to each course object and set it equal to a list[] of tags from the db
      retval.map(cobj=>{
        cobj['tags'] = [cobj.subject_prefix];
      })
      this.props.updateCourses(retval);
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
            <Route path="/coursepage" component={CoursePage} />
            <Route path='/cart' component={CourseCart} />
            <Route path='/maintags' component={Maintags} />
            <Route path='/maintaglist' component={MaintagFilterList} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCourses: (courses) => {dispatch(update(courses))}
  }
}

export default connect(null, mapDispatchToProps)(App);