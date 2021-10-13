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
    console.log(this.state.courses);
  }

  render() {
    return (
      <div className="courselist">
        {this.state.courses.map(course => {
          return <CourseCard
            coursePrefix={course.subject_prefix}
            courseTitle={course.title}
            courseNumber={course.number} />
        })}
      </div>
    );
  }
}
