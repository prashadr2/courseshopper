import React from 'react'
import './CourseCard.css'
import TagList from './TagList'
import {
  Link
} from "react-router-dom";


function CourseCard(props) {
  // courseName, courseNumber, courseTitle
  return (
    <div className="courseCard" style={{ marginTop: "10px" }}>
      <div className="title" >
        <Link to="/coursepage" style={{ textDecoration: "none", color:"white"}}> 
        {props.courseTitle} {props.courseNumber} {props.courseName}
        </Link>
      </div>
      <div style={{ margin: "10px" }}>
        <TagList />
      </div>
      <div className="description">{props.courseDescription}</div>
    </div>
  )
}

export default CourseCard
