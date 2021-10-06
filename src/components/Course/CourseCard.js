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
      courseName: this.props.courseName,
      courseDesc: this.props.courseDescription,
      courseTags: [] //change this later to recieve a prop with database tag info
    }
  }

  render(){
    return (
      <div className="courseCard" style={{ marginTop: "10px" }}>
        <div className="title" >
          <Link to="/coursepage" style={{ textDecoration: "none", color:"white"}}> 
          {this.state.courseTitle} {this.state.courseNumber} {this.state.courseName}
          </Link>
        </div>
        <div style={{ margin: "10px" }}>
          <TagList />
        </div>
        <div className="description">{this.state.courseDescription}</div>
      </div>
    )
  }
}


// function CourseCard(props) {
//   // courseName, courseNumber, courseTitle
//   return (
//     <div className="courseCard" style={{ marginTop: "10px" }}>
//       <div className="title" >
//         <Link to="/coursepage" style={{ textDecoration: "none", color:"white"}}> 
//         {props.courseTitle} {props.courseNumber} {props.courseName}
//         </Link>
//       </div>
//       <div style={{ margin: "10px" }}>
//         <TagList />
//       </div>
//       <div className="description">{props.courseDescription}</div>
//     </div>
//   )
// }

// export default CourseCard;
