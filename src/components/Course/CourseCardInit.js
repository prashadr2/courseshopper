import React from 'react';
import ReactDOM from 'react-dom';
import rethtml from './CourseInner.js'

class CourseCardInit extends React.Component(){
    constructor(props){
        super(props);
        this.state  = {
            orcacourses: []
          }
    }

    componentDidMount(){
        OrcaParse().then(retval => {
            console.log(retval)
            this.setState({orcacourses: retval});
         });
    }

    render(){
        return(
            <div>

            </div>
        );
    }

}

