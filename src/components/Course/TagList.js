import React from 'react'
import {useState} from 'react'
import "./TagList.css"

const TagList = (props) => {
  const [tags, setTags] = useState(["Communication Intensive", "Writing", "tag3"]);
  console.log(tags);
  console.log("hey");
  return (
    <div className="taglist" align="left">
      {tags.map((tag) => {
        return (
            <span className="tag" style={{padding:"5px"}}>{tag}</span>
        )
      })}
    </div>
  )
}

export default TagList
