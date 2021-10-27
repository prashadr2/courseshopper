import { useSelector } from 'react-redux'
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
        timeout={15000} />) :
        (clist.length === 0 ? (<div><p>Cart is empty!!</p></div>) :
        (
        <div>
        <div>
            <p>Courses Selected: {clist} </p>
        </div>
        <div className="courselist">
          {all.map(course => {
              const compid = course.subject_prefix + '-' + course.number;
              if(clist.includes(compid)){
                return <CourseCard
              coursePrefix={course.subject_prefix}
              courseTitle={course.title}
              courseNumber={course.number}
              courseTags={course.tags} />
              } else return null
          })}
        </div>
        </div>
      )));
}

export default CourseCart;
