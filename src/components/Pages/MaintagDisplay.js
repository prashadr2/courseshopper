import React from 'react'
import "../Course/TagList.css"
import {
    Link
} from "react-router-dom";

const MaintagDisplay = (props) => {
    return(
        <div>
            <div className="taglist" style={{ margin: "10px" }}>
            <Link to={{
                pathname: '/maintaglist',
                state:{
                    maintagname: props.name
                }
            }}>
            <span className="tag">{props.name}</span>
            </Link>
            </div>
        </div>
    );
}

export default MaintagDisplay;