import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import EmployeeNameDropdown from "./EmployeeNameDropdown";

const UpdateEmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: "",
    position: "HR",
  });

  const { employeeName } = useParams();

  useEffect(() => {
    if (employeeName !== undefined) {
      setEmployee({ ...employee, name: employeeName });
    }
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Axios.put(
      "http://3.17.206.158:8080/EmployeeServer/employee",
      employee,
      {
        withCredentials: true,
      }
    );
    history.push("/view");
  };

  //dynamically render a dropdown box with employee names?
  return (
    <div className="form-container update">
      <form onSubmit={handleSubmit}>
        <h3>Update Employee Position</h3>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Select an Employee</label>
          <EmployeeNameDropdown val={employee.name} onChange={handleChange} />
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
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateEmployeeForm;
