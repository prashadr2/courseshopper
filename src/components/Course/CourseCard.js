import React from 'react'
import './CourseCard.css'
import TagList from './TagList'
import {
  Link
} from "react-router-dom";
import axios from 'axios';
import StarRatings from 'react-star-ratings';


// display the course info (course name, course description, course overall rating)
export default class CourseCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseTitle: this.props.courseTitle,
      courseNumber: this.props.courseNumber,
      coursePrefix: this.props.coursePrefix,
      courseTags: this.props.courseTags, 
      courseDesc: "",
      overallrating: 0.0,
    }
  }

  // fetch course data from database 
  componentDidMount() {
    axios.get("https://course-shopper.herokuapp.com/course/" + this.state.coursePrefix + "/" + this.state.courseNumber)
      .then((retval) => {
        // console.log(retval);
        this.setState({
          courseDesc: retval.data.description.slice(),
        })
      })
      .catch((error) => { console.log(error); });
    axios.get("https://course-shopper.herokuapp.com/ravg/" + this.state.coursePrefix + "/" + this.state.courseNumber)
      .then((retval) => {
        this.setState({
          overallrating: retval.data.overall
        })
      })
      .catch((error) => { console.log(error); });
  }

  //on click of coursecard, forward user to the coursepage component with props from this component state
  render() {
    return (
      <div className="courseCard" style={{ marginTop: "10px" }}>
        <div className="title" >
          <div style={{ float: "left" }}>
            <Link to={{
              pathname: '/coursepage',
              state: {
                courseTitle: this.state.courseTitle,
                courseNumber: this.state.courseNumber,
                coursePrefix: this.state.coursePrefix,
                description: this.state.courseDesc
              }
            }} style={{ textDecoration: "none", color: "white" }}>
              {this.state.courseTitle} - {this.state.coursePrefix} {this.state.courseNumber}
            </Link>
          </div>
          <div style={{ float: "right", paddingRight: "20px" }}>
            <StarRatings
              starSpacing="3px"
              starDimension="25px"
              starRatedColor="orange"
              rating={this.state.overallrating}
            />
          </div>
        </div>
        <div style={{ margin: "10px" }}>
          <TagList tags={this.state.courseTags} />
        </div>
        <div className="description">{this.state.courseDesc}</div>
      </div>
    )
  }
}