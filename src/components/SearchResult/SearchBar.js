import React, { useState } from 'react'
import { Link } from "react-router-dom";

import './SearchBar.css'

const SearchBar = (props) => {
  const [userinput, setuserinput] = useState("");

  return (
    <form>
      <input
        className="searchBar"
        type="search"
        name="searchbar"
        placeholder="Search your courses"
        value={userinput}
        onInput={(e) => {e.preventDefault(); setuserinput(e.target.value);}}
      />
      <button className="searchBtn" type="submit" onClick={(e)=>{e.preventDefault()}}>
        <Link style={{ textDecoration: "none", color: "white" }} 
          to={{
            pathname: '/courselist',
            state: {
              SearchPrefix: userinput.toUpperCase()
            }
          }}>
          Search
        </Link>
      </button>
    </form>
  );
}

export default SearchBar
