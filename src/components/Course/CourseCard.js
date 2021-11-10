import React from 'react'
import './CourseCard.css'
import TagList from './TagList'
import {
  Link
} from "react-router-dom";
import axios from 'axios';



export default class CourseCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseTitle: this.props.courseTitle,
      courseNumber: this.props.courseNumber,
      coursePrefix: this.props.coursePrefix,
      courseTags: this.props.courseTags, //change this later to recieve a prop with database tag info
      courseDesc: "",
      overallrating: 0.0,
    }
  }


  componentDidMount() {
    axios.get("https://course-shopper.herokuapp.com/course/" + this.state.coursePrefix + "/" + this.state.courseNumber)
      .then((retval) => {
        console.log(retval);
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
            Rating: {this.state.overallrating}/5 
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