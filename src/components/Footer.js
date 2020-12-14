import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import charizard from "../img/charizard.png";

const Footer = () => {
  const user = useSelector((store) => store);
  return (
    <footer>
      ConstructCo. &copy; 2020{" "}
      {user.name ? " | Welcome, " + user.name + "!" : ""}
      <Link to="/charizard">
        <img id="charizard" src={charizard} alt="charizard!" />
      </Link>
    </footer>
  );
};

export default Footer;
