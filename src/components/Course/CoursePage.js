import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { add, remove } from '../../courseSlice'
import Reviews from './Reviews'
import Dropzone from 'react-dropzone'
import './CoursePage.css';
import StarRatings from 'react-star-ratings';

// main course page
// holds dynamic ratings from database as well as local user ratings in the state
// interacts with database to send/recieve syllabus as well as send/recieve reviews
const CoursePage = (props) => {
  //required props: courseprefix, coursetitle, coursenumber
  const [upload, setUpload] = useState(false);
  const [qrating, setQ] = useState(0.0);
  const [wrating, setW] = useState(0.0);
  const [prating, setP] = useState(0.0);
  const [drating, setD] = useState(0.0);
  const [overall, setO] = useState(0.0);

  //fetching rating data from database
  useEffect(() => {
    axios.get("https://course-shopper.herokuapp.com/ravg/" + props.location.state.coursePrefix + "/" + props.location.state.courseNumber)
      .then((retval) => {
        setQ(retval.data.qrating);
        setW(retval.data.wrating);
        setP(retval.data.prating);
        setD(retval.data.drating);
        setO(retval.data.overall);
      })
      .catch((error) => { console.log(error); });
  });

  // upload the syllabus to the database
  const handleDrop = file => {
    const formData = new FormData();
    formData.append('pdf', file[0]);
    formData.append('prefix', props.location.state.coursePrefix);
    formData.append('number', props.location.state.courseNumber);
    axios.post("https://course-shopper.herokuapp.com/syllabus", formData)
      .then((response) => {
        setUpload(true);
      })
      .catch(error => { console.log(error); })
  }

  // help function to download the syllabus from the database
  const getpdf = (e) => {
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://course-shopper.herokuapp.com/syllabus/" + props.location.state.coursePrefix + '/' + props.location.state.courseNumber, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
      var blob = new Blob([xhr.response], { type: "application/pdf" });
      var fileurl = URL.createObjectURL(blob);
      window.open(fileurl);
    }
    xhr.send();
  }

  const dispatch = useDispatch();
  const cid = props.location.state.coursePrefix + '-' + props.location.state.courseNumber;
  let buttontxt;
  if (upload) {
    buttontxt = "Syllabus submitted to database!"
  } else {
    buttontxt = "Click here to upload syllabus to database!"
  }

  return (
    <div className="coursepage">
      <div className="courseTitle">
        {props.location.state.coursePrefix} {props.location.state.courseNumber} - {props.location.state.courseTitle}
      </div>
      <div>
        <button className="addBtn" onClick={() => { alert("Added " + props.location.state.courseTitle + " to Cart!"); dispatch(add(cid)) }} >Add Course to Cart</button>
        <button className="rmvBtn" onClick={() => { alert("Removed " + props.location.state.courseTitle + " from Cart!"); dispatch(remove(cid)) }}>Remove from Cart</button>
      </div>
      <div className='courseInfo'>
        <p> {props.location.state.description}</p>
      </div>
      <div class="row">
        <div class="leftcolumn">
          <div className="syllabus">
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
              <button className='download' onClick={(e) => getpdf(e)}>Download Syllabus</button>
            </div>
          </div>
          <div className="overall_rating">
            overall rating
            <div style={{ marginTop: "10px" }}>
              {overall}/5 <br />
              <StarRatings starDimension="36px" rating={overall} starRatedColor="orange" />
            </div>
          </div>
        </div>
        <div class="rightcolumn">
          <div className='rating'>Teaching Quality <StarRatings starRatedColor="green" rating={qrating} name="qrate" /></div>
          <div className='rating'>Workload   <StarRatings starRatedColor="green" rating={wrating} name="wrate" /></div>
          <div className='rating'>Difficulty <StarRatings starRatedColor="green" rating={drating} name="drate" /></div>
          <div className='rating'>Practicability <StarRatings starRatedColor="green" rating={prating} name="prate" /></div>
        </div>
      </div>
      <Reviews courseTitle={props.location.state.courseTitle} coursePrefix={props.location.state.coursePrefix} courseNumber={props.location.state.courseNumber} />
    </div>
  );

}

export default CoursePage;