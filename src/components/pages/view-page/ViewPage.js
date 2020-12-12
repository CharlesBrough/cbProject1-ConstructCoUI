import React, { useState, useEffect } from "react";
import Axios from "axios";
import EmployeeTable from "./EmployeeTable";

const ViewPage = () => {
  const [employees, setEmployees] = useState([]);
  const getEmployees = async () => {
    const resp = await Axios.get("http://3.17.206.158:8080/EmployeeServer/employee");
    setEmployees(resp.data);
  };

  const refreshEmployees = () => getEmployees();

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <EmployeeTable
      employees={employees}
      refreshEmployees={refreshEmployees}
    />
  )
}

export default ViewPage
