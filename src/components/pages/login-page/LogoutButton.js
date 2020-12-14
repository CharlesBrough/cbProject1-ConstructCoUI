import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions";
import Axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const LogoutButton = ({ name }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    Axios.get("http://3.17.206.158:8080/EmployeeServer/user", {
      withCredentials: true,
    }).then((resp) => {
      // console.log(resp);
      // alert(JSON.stringify(resp));

      //Redux
      dispatch(logout(""));
      toast.dark("Successfully logged out.");
    });
  };

  return (
    <>
      <h3>You're logged in as {name}!</h3>
      <Link to="/form">
        <button type="button" className="btn btn-warning">
          <i className="fas fa-pencil-alt"></i>
          Start Making Changes
        </button>
      </Link>
      <br /><br />
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default LogoutButton;
