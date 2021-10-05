import OrcaParse from '../../OrcaParse'
import React from 'react';
import CourseCard from './CourseCard';



export default class CourseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    }
  }

  componentDidMount() {
    OrcaParse().then(retval => {
      console.log(retval)
      this.setState({ courses: retval });
    });
  }

  render() {
    return (
      <div className="courselist">
        {this.state.courses.map(course => {
          return <CourseCard
            courseName={course.title}
            courseTitle={course.subject_prefix}
            courseNumber={course.number} />
        })}
      </div>
    );
  }
}
