import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const user = useSelector(store => store);
  return (
  <footer>
    ConstructCo. &copy; 2020 {(user.name) ? ' | Welcome, '+user.name+'!' : ''}
  </footer>);
};

export default Footer;
