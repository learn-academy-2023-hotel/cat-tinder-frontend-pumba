import React from "react";
import Logo from "../assets/DogTinderLogo.png";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <h1>
          <img src={Logo} />
          Dog Tinder
        </h1>
        <div className="nav center">
          <Nav>
            <NavItem>
              <NavLink active to="/" className="nav-link">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/dogindex" className="nav-link">Start Matching</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/dognew" className="nav-link">Create a Profile</NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    </div>
  );
};
export default Header;
