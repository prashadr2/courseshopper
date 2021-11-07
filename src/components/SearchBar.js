import React from 'react'
import { Link } from "react-router-dom";

import './SearchBar.css'

const SearchBar = () => {
  return (
    <form>
      <input
        className="searchBar"
        type="text"
        placeholder="Search your courses"
      />
      <button className="searchBtn" type="submit">
        <Link style={{ textDecoration: "none", color: "white" }} to="/maintags">
          Search
        </Link>
      </button>
    </form>
  );
}

export default SearchBar
