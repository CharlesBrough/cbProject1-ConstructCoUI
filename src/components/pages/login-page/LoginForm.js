import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from "../../../redux/actions";
import Axios from "axios";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [user, setUser] = useState({
    name: "",
    code: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://3.17.206.158:8080/EmployeeServer/user", user, {
      withCredentials: true,
    }).then((resp) => {
      // console.log(resp);
      // alert(JSON.stringify(resp));

      //redux
      dispatch(login(user));
      toast.dark("Successfully logged in as " + user.name + "!");
    });
  };

  return (
      <form onSubmit={handleSubmit}>
        <h3>Login to the Employee Server</h3>
        <div className="form-group">
          <label htmlFor="input-name">Employee Name</label>
          <input
            type="text"
            className="form-control"
            id="input-name"
            placeholder="Enter employee name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input-code">Code</label>
          <input
            type="password"
            className="form-control"
            id="input-code"
            placeholder="0000"
            name="code"
            value={user.code}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
  );
};

export default LoginForm;
