import Axios from "axios";
import React, { useEffect, useState } from "react";

const EmployeeNameDropdown = ({ val, onChange }) => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    const resp = await Axios.get(
      "http://3.17.206.158:8080/EmployeeServer/employee"
    );
    setEmployees(resp.data);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const insertEmployee = (e) => <option key={e.id}>{e.name}</option>;

  return (
    <select
      className="form-control"
      id="exampleFormControlSelect1"
      name="name"
      value={val}
      onChange={onChange}
    >
      { employees.map((e) => insertEmployee(e)) }
    </select>
  );
};

export default EmployeeNameDropdown;
