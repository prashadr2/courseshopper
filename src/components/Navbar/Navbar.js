import React, { useState } from 'react'
import { NavbarItems } from './NavbarItems'
import './Navbar.css'
import { auth, logout } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";



export default function Navbar() {
  console.log(NavbarItems);

  const [user] = useAuthState(auth);
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
        <div className="menuLinks" id={showItems ? "hidden" : ""}>
          {NavbarItems.map((item) => {
            if (item.title !== 'Login' && item.title !== 'Signup') {
              return (
                <a className={item.className} href={item.url}>{item.title}</a>
              )
            } else {
              return (
                !user && <a className={item.className} href={item.url}>{item.title}</a>
              )
            }
          })}
          {user &&
            <button style={{
              background: "white",
              border: "none",
              borderRadius: "5px",
              marginLeft: "25px",
              fontSize: "18px",
              color: "green",
              padding: "5px"
            }}
              onClick={logout}
            >
              Log Out
            </button>}
        </div>
        <button className="button">Open</button>
      </div>

    </div>
  )
}