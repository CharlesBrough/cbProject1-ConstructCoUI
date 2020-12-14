import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const AddEmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: "",
    position: "HR",
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  let history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await Axios.post(
      "http://3.17.206.158:8080/EmployeeServer/employee",
      employee,
      {
        withCredentials: true,
      }
    );
    console.log(resp);
    history.push("/view");
  };

  return (
    <div className="form-container add">
      <form onSubmit={handleSubmit}>
        <h3>Add Employee</h3>
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
            <option>HR</option>
            <option>CEO</option>
            <option>Contractor</option>
            <option>Installer</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddEmployeeForm;
