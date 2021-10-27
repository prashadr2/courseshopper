import React from 'react'
import './CourseCard.css'
import TagList from './TagList'
import {
  Link
} from "react-router-dom";

 
export default class CourseCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      courseTitle: this.props.courseTitle,
      courseNumber: this.props.courseNumber,
      coursePrefix: this.props.coursePrefix,
      courseTags: this.props.courseTags //change this later to recieve a prop with database tag info
    }
  }


  render(){
    return (
      <div className="courseCard" style={{ marginTop: "10px" }}>
        <div className="title" >
          <Link to={{
            pathname: '/coursepage',
            state:{
              courseTitle: this.state.courseTitle,
              courseNumber: this.state.courseNumber,
              coursePrefix: this.state.coursePrefix,
            }
          }} style={{textDecoration: "none", color:"white"}}> 
          {this.state.courseTitle} - {this.state.coursePrefix} {this.state.courseNumber}
          </Link>
        </div>
        <div style={{ margin: "10px" }}>
          <TagList tags={this.state.courseTags}/>
        </div>
        <div className="description">we need to find descriptions!!</div>
      </div>
    )
  }
}