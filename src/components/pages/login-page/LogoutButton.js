import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions";
import Axios from "axios";
import { toast } from "react-toastify";

const LogoutButton = ({name}) => {
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
      <button className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default LogoutButton;
