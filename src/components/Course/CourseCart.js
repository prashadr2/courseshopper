import OrcaParse from '../../OrcaParse'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import CourseCard from './CourseCard';
import Loader from "react-loader-spinner";


const CourseCart = () => {
    const all = useSelector((state) => state.allcourses.allcourses);
    const clist = useSelector((state) => state.courses.courses);
    return (all.length === 0 ? (<Loader
        type="TailSpin"
        color="#52f3cf"
        height={100}
        width={100}
        timeout={15000} />) : (
        <div>
        <div>
            <p>Courses Selected: {clist} </p>
        </div>
        <div className="courselist">
          {all.map(course => {
            return <CourseCard
              coursePrefix={course.subject_prefix}
              courseTitle={course.title}
              courseNumber={course.number}
              courseTags={course.tags} />
          })}
        </div>
        </div>
      ));
}

export default CourseCart;
