import React from "react";
import Logo from "../assets/DogTinderLogo.png";
import { Nav, NavItem, NavLink } from "reactstrap";

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
              <NavLink active href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/dogindex">Start Matching</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/dognew">Create a Profile</NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    </div>
  );
};
export default Header;
