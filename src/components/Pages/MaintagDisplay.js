import React from 'react'
import './MaintagDisplay.css';
import {
    Link
} from "react-router-dom";

const MaintagDisplay = (props) => {
    return (
        <div>
            <div className="taglist" style={{ margin: "10px" }}>
                <Link to={{
                    pathname: '/maintaglist',
                    state: {
                        maintagname: props.name
                    }
                }}>
                    <div className="tag" style={{fontSize:"25px"}}>{props.name}</div>
                </Link>
            </div>
        </div>
    );
}

export default MaintagDisplay;