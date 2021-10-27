import React from 'react'
import "./TagList.css"

const TagList = (props) => {
  return (
    <div className="taglist" align="left">
      Tags:{props.tags.map((tag) => {
        return (
            <span className="tag" style={{padding:"5px"}}>{tag}</span>
        )
      })}
    </div>
  )
}

export default TagList
