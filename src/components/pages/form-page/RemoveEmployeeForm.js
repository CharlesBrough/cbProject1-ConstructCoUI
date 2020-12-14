import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import EmployeeNameDropdown from "./EmployeeNameDropdown";

const RemoveEmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: "",
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    await Axios.delete(
      "http://3.17.206.158:8080/EmployeeServer/employee?name=" + employee.name,
      {
        withCredentials: true,
      }
    );
    history.push("/view");
  };

  return (
    <div className="form-container delete">
      <form onSubmit={handleSubmit}>
        <h3>Remove Employee</h3>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Select an Employee</label>
          <EmployeeNameDropdown val={employee.name} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">
          Remove
        </button>
      </form>
    </div>
  );
};

export default RemoveEmployeeForm;
