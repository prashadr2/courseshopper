import React from 'react';
import CourseCard from './CourseCard';
import { connect } from 'react-redux'

// display a list of course cards
//iterate over all courses from redux store and list them out as coursecards
class CourseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: this.props.allcourses,
      searchParams: props.location.state.searchParams
    }
  }

  render() {
    let carray = [];
    console.log(this.state.searchParams);
    this.state.courses.map(course => {
      if(course.subject_prefix === this.state.searchParams || (course.number === this.state.searchParams || course.title=== this.state.searchParams)){
        carray.push(
          <CourseCard
          coursePrefix={course.subject_prefix}
          courseTitle={course.title}
          courseNumber={course.number}
          courseTags={course.tags}
          />);
        }
      }
    );

    let printval = (carray.length === 0 ? "No results" : carray);

    return (
      <div className="courselist">
        {printval}
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