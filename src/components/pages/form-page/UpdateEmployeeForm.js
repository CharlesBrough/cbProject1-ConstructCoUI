import Axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const UpdateEmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: "",
    position: "",
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await Axios.put(
      "http://3.17.206.158:8080/EmployeeServer/employee",
      employee,
      {
        withCredentials: true,
      }
    );
    console.log(resp);
    history.push("/view");
  };

  //dynamically render a dropdown box with employee names?
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>Update Employee Position</h3>
        <div className="form-group">
          <label htmlFor="name-input">Employee Name</label>
          <input
            type="text"
            className="form-control"
            id="name-input"
            placeholder="Enter employee name"
            name="name"
            value={employee.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Employee Position</label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            name="position"
            value={employee.position}
            onChange={handleChange}
          >
            <option>CEO</option>
            <option>Contractor</option>
            <option>Installer</option>
            <option>HR</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateEmployeeForm;
