import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { add, remove } from '../../courseSlice'
import Reviews from './Reviews'
import Dropzone from 'react-dropzone'
import { ninvoke } from 'q';

const CoursePage = (props) => {
  //required props: courseprefix, coursetitle, coursenumber
  const [upload, setUpload] = useState(false);

  const handleDrop = file =>{
    console.log(file);
    const formData = new FormData();
    formData.append('pdf', file[0]);
    formData.append('prefix', props.location.state.coursePrefix);
    formData.append('number', props.location.state.courseNumber);
    for (var key of formData.entries()) {
      console.log(key[0] + ', ' + key[1]);
    }
    axios.post("https://course-shopper.herokuapp.com/syllabus", formData)
    .then((response)=>{
      console.log(response);
      setUpload(true);
    })
    .catch(error=>{console.log(error);})
  }

  const getpdf = (e) => {
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://course-shopper.herokuapp.com/syllabus/" + props.location.state.coursePrefix + '/' + props.location.state.courseNumber, true);
    xhr.responseType = 'blob';
    xhr.onload = function() {
        var blob = new Blob([xhr.response], {type:"application/pdf"});
        var fileurl = URL.createObjectURL(blob);
        window.open(fileurl);
    }
    xhr.send();
    // axios.get("https://course-shopper.herokuapp.com/syllabus/" + props.location.state.coursePrefix + '/' + props.location.state.courseNumber)
    // .then(retval=>{
    //   console.log(retval);
    //   const blob = new Blob([retval.data], {responseType: 'arraybuffer', type: 'application/pdf'});
    //   const fileDownloadUrl = URL.createObjectURL(blob);
    //   window.open(fileDownloadUrl);
    // }).catch(error=>{
    //   console.log(error);
    // });
  }

  const dispatch = useDispatch();
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
        <button onClick={(e) => getpdf(e)}>Download Syllabus</button> 
      </div>
      <div>
        <button onClick={() => dispatch(add(cid)) }>Add Course To Cart </button>
      </div>
      <div>
        <button onClick={() => dispatch(remove(cid)) }>Remove Course From Cart </button>
      </div>
    <Reviews courseTitle={props.location.state.courseTitle} coursePrefix={props.location.state.coursePrefix} courseNumber={props.location.state.courseNumber} />
    </div>
  );

}

export default CoursePage;