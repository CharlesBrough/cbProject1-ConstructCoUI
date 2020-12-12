import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const RemoveEmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  let history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await Axios.delete(
      "http://3.17.206.158:8080/EmployeeServer/employee?name="+employee.name,
      {
        withCredentials: true,
      }
    );
    console.log(resp);
    history.push("/view");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>Remove Employee</h3>
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RemoveEmployeeForm;
