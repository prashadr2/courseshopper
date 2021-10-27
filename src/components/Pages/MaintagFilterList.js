import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import CourseCard from '../Course/CourseCard';
import Loader from "react-loader-spinner";


const MaintagFilterList = (props) => {
    const all = useSelector((state) => state.allcourses.allcourses);
    console.log(props);
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
            }
          })}
        </div>
        </div>
      ));
}

export default MaintagFilterList;
