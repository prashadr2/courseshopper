import React from 'react'
import '../App.css'

const SearchBar = () => {
  return (
    <div>
      <div> 
        <input
          class="form-control" 
          type="text" 
          placeholder="Search for courses"
        />
      </div>
    </div>
  );
}

export default SearchBar