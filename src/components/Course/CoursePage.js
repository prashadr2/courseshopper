import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { add, remove } from '../../courseSlice'


const submitSyllabus = () => {
  let request = {
    'pdf': 'axios post test',
    'course': 'axios post test',
    'professor': 'axios post test'
  }
  axios.post("https://course-shopper.herokuapp.com/syllabus", request).then(
    (response)=>{console.log(response);}, (error)=>{console.log(error);});
  // axios.get("https://course-shopper.herokuapp.com/syllabus").then(rval=>{console.log(rval);}).catch(error=>{console.log(error);});
}


const CoursePage = (props) => {
  //required props: courseprefix, coursetitle, coursenumber
  const dispatch = useDispatch();
  const clist = useSelector((state) => state.courses.courses);
  const cid = props.location.state.coursePrefix + '-' + props.location.state.courseNumber;
  return (
    <div className="coursepage">
      <div>
        <h1>{props.location.state.courseTitle} - {props.location.state.coursePrefix} {props.location.state.courseNumber}</h1>
      </div>
      <div>
        <p>
          Prequisites/Corequisites: {props.location.state.prereqs} <br/>
          When Offered: {props.location.state.termsoffered}
        </p>
        <p> {props.location.state.description}</p>
      </div>
      <div>
        <button onClick={null}>Professors</button>
      </div>
      <div>
        <button onClick={submitSyllabus}>Submit Syllabus</button>
      </div>
      <div>
        <button onClick={() => dispatch(add(cid)) }>Add To Cart </button>
      </div>
      <p>clist: {clist}</p>


    </div>
  );

}

export default CoursePage;

// export default class CoursePage extends React.Component {
//   constructor(props) {
//     super(props);
//     // console.log(props);
//     this.state = {
//         coursename: this.props.location.state.location.state.coursename,
//         tags: [],
//         prereqs: "",
//         termsoffered: "",
//         description: "",
//     }
//   }

//   componentDidMount() {
    
//   }

//   professorButton(){
//     document.getElementById("")
//   }

//   submitSyllabus(){
//     let request = {
//       'pdf': 'axios post test',
//       'course': 'axios post test',
//       'professor': 'axios post test'
//     }
//     axios.post("https://course-shopper.herokuapp.com/syllabus", request).then(
//       (response)=>{console.log(response);}, (error)=>{console.log(error);});

//     // axios.get("https://course-shopper.herokuapp.com/syllabus").then(rval=>{console.log(rval);}).catch(error=>{console.log(error);});
//   }

//   addToCart(){
//     const dispatch = useDispatch();
//     dispatch(add())
//   }

//   render() {
//     return (
//       <div className="coursepage">
//         <div>
//           <h1>{this.state.coursename}</h1>
//         </div>
//         <div>
//           <p>
//             Prequisites/Corequisites: {this.state.prereqs} <br/>
//             When Offered: {this.state.termsoffered}
//           </p>
//           <p> {this.state.description}</p>
//         </div>
//         <div>
//           <button onclick="professorButton()">Professors</button>
//         </div>
//         <div>
//           <button onClick={this.submitSyllabus}>Submit Syllabus</button>
//         </div>
//         <div>
//           <button onclick={this.addToCart}>Add To Cart </button>
//         </div>


//       </div>
//     );
//   }
// }
