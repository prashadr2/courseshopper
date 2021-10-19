import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { add, remove } from '../../courseSlice'
import Reviews from './Reviews'
import Dropzone from 'react-dropzone'

const CoursePage = (props) => {
  //required props: courseprefix, coursetitle, coursenumber
  const [upload, setUpload] = useState(false);

  const handleDrop = file =>{
    var reader  = new FileReader();
    console.log(file);

    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading has failed')

    reader.onload = () => {
      if(!!reader.result){
        console.log('reader.result', reader.result); //reader.result is a binary str as of now!!!
        let request = {
          'pdf': reader.result,
          'prefix': props.location.state.coursePrefix,
          'number': props.location.state.courseNumber
        }
        axios.post("https://course-shopper.herokuapp.com/syllabus", request)
        .then((response)=>{
          console.log(response);
          setUpload(true);
        })
        .catch(error=>{console.log(error);})
      }
    }
    reader.readAsText(file[0]);
  }
  const dispatch = useDispatch();
  const clist = useSelector((state) => state.courses.courses);
  const cid = props.location.state.coursePrefix + '-' + props.location.state.courseNumber;
  let buttontxt;
  if(upload){
    buttontxt = "Syllabus submitted to database!"
  } else {
    buttontxt = "Click here to upload syllabus to database!"
  }
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
      <div className="syllabussection">
        <Dropzone onDrop={handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <p>{buttontxt}</p>
            </div>
          )}
        </Dropzone>
      </div>
      <div>
        <button onClick={() => dispatch(add(cid)) }>Add Course To Cart </button>
      </div>
    <Reviews courseTitle={props.location.state.courseTitle} coursePrefix={props.location.state.coursePrefix} courseNumber={props.location.state.courseNumber} />
    </div>
  );

}

export default CoursePage;