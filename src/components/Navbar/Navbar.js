import React, { useState } from 'react'
import { NavbarItems } from './NavbarItems'
import {
  Link
} from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
  console.log(NavbarItems);

  const [clicked, setClicked] = useState(false);
  const [showItems, setShowItems] = useState(false);

  return (
    <div className="Navbar">
      <div className="leftSide">
        <Link to={{pathname:"/"}} className="NavbarLogo">CourseShopper</Link>
        <div className="NavbarIcon"></div>
        {/* <input type="text" placeholder="Search..." />
        <button>Search</button> */}
      </div>

      <div className="rightSide">
        <div className="menuLinks" id={showItems ? "hidden" :""}>
          {NavbarItems.map((item) => {
            return (
              <Link className={item.className} to={item.url}>{item.title}</Link>
            )
          })}
        </div>
        <button className="button">Open</button>
      </div>

    </div>
  )
}
