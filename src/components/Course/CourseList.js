import OrcaParse from '../../OrcaParse'
import React from 'react';
import CourseCard from './CourseCard';
import { useSelector, useDispatch, connect } from 'react-redux'



class CourseList extends React.Component { //THIS CLASS IS OUTDATED, LOOK AT COURSECART!!!
  constructor(props) {
    super(props);
    this.state = {
      courses: props.allcourses
    }
  }

  componentDidMount() {
    // OrcaParse().then(retval => {
    //   console.log(retval)
    //   this.setState({ courses: retval });
    // });
    // console.log(this.state.courses);
  }

  render() {
    console.log("inlist", this.state.courses);
    return (
      <div className="courselist">
        {this.state.courses.map(course => {
          return <CourseCard
            coursePrefix={course.subject_prefix}
            courseTitle={course.title}
            courseNumber={course.number}
            courseTags={course.tags}
            />
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    allcourses: state.allcourses.allcourses
  }
}


export default connect(mapStateToProps,null)(CourseList);