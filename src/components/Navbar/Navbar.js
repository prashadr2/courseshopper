import React, { useState } from 'react'
import { NavbarItems } from './NavbarItems'
import './Navbar.css'

export default function Navbar() {
  console.log(NavbarItems);

  const [clicked, setClicked] = useState(false);
  const [showItems, setShowItems] = useState(false);

  return (
    <div className="Navbar">
      <div className="leftSide">
        <a href="/" className="NavbarLogo">CourseShopper</a>
        <div className="NavbarIcon"></div>
        {/* <input type="text" placeholder="Search..." />
        <button>Search</button> */}
      </div>

      <div className="rightSide">
        <div className="menuLinks" id={showItems ? "hidden" :""}>
          {NavbarItems.map((item) => {
            return (
              <a className={item.className} href={item.url}>{item.title}</a>
            )
          })}
        </div>
        <button className="button">Open</button>
      </div>

    </div>
  )
}
