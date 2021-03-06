import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

// export default class Showcase extends React.Component {
const Header = () => {
  const user = useSelector(store => store);

  return (
    <header>
      <nav className="">
        <div className="nav-container">
          <div className="logo">
            <NavLink to="/" activeClassName="current-page">
              <img src="hardhat.ico" alt="Hardhat Icon" />
              ConstructCo.
            </NavLink>
          </div>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="current-page">
                <i className="fas fa-home"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/view" activeClassName="current-page">
                <i className="fas fa-th-list"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/form"
              className={user.name ? "" : " disabled-link"}
              activeClassName="current-page"
              >
                <i className="fas fa-pencil-alt"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/user" activeClassName="current-page">
                <i className="fas fa-sign-in-alt"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
