import React from 'react';
import CourseCard from './CourseCard';
import { connect } from 'react-redux'

// display a list of course cards
//iterate over all courses from redux store and list them out as coursecards
class CourseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: props.allcourses
    }
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