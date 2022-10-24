import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from "react-router-dom"
const Navbar = () => {
  const [location, setlocation] = useState(false)
  const Location = useLocation()

  useEffect(() => {
    console.log();
    Location.pathname.includes("signin")
  }, [Location])


  return (
    Location.pathname.includes("signin") ? (
      <div>
        {/* <div className="navbar__menu">
          <GiHamburgerMenu />
          <p className="navbar__menu__text">All</p>
        </div>
        <ul className="navbar__collection">
          <li className="navbar__item">Today's Deals</li>
          <li className="navbar__item">Customer Service</li>
          <li className="navbar__item">Registry</li>
          <li className="navbar__item">Gift Cards</li>
          <li className="navbar__item">Sell</li>
        </ul> */}
      </div >) : ""
  );
};

export default Navbar;
