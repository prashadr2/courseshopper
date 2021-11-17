import React from 'react'
import { useSelector } from 'react-redux'
import CourseCard from '../Course/CourseCard';
import Loader from "react-loader-spinner";


const MaintagFilterList = (props) => {
    //grab courses from redux store via selector
    //map over all courses and filter down by maintagdisplay prop link
    const all = useSelector((state) => state.allcourses.allcourses);
    return (all.length === 0 ? (<Loader
        type="TailSpin"
        color="#52f3cf"
        height={100}
        width={100}
        timeout={15000} />) : (
        <div>
        <div className="courselist">
          {all.map(course => {
            if(course.tags.includes(props.location.state.maintagname)){
                return <CourseCard
              coursePrefix={course.subject_prefix}
              courseTitle={course.title}
              courseNumber={course.number}
              courseTags={course.tags} />
            } else return null
          })}
        </div>
        </div>
      ));
}

export default MaintagFilterList;
