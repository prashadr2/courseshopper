import React from 'react'
import CourseCard from '../Course/CourseCard'
import CourseList from '../Course/CourseList'
export default function SearchResult() {
  return (
    <div style={{ marginTop: "10px" }}>
      <CourseCard
        courseName={"software design & documentation"}
        courseTitle={"CSCI"}
        courseNumber={"4440"}
        courseDescription={"Software system design methodology emphasizing use of object oriented modeling of application domains and of software systems, and emphasizing the roles of written and oral communication in software engineering. Project management and software testing. Individual and team projects include specification, software architecture, user interfaces, and documentation of the phases of a project. This is a communication-intensive course."}
      />
      <CourseCard
        courseName={"software design & documentation"}
        courseTitle={"CSCI"}
        courseNumber={"4440"}
        courseDescription={"Software system design methodology emphasizing use of object oriented modeling of application domains and of software systems, and emphasizing the roles of written and oral communication in software engineering. Project management and software testing. Individual and team projects include specification, software architecture, user interfaces, and documentation of the phases of a project. This is a communication-intensive course."}
      />
      <CourseCard
        courseName={"Database System"}
        courseTitle={"CSCI"}
        courseNumber={"4380"}
      />
      <CourseCard
        courseName={"Data Structures"}
        courseTitle={"CSCI"}
        courseNumber={"1200"}
      />
      <CourseList />
    </div>
  )
}
