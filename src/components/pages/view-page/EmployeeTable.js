import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const EmployeeTable = ({ employees, refreshEmployees }) => {
  const user = useSelector((store) => store);

  const insertTableData = (employee) => {
    return (
      <tr key={employee.id}>
        <td>{employee.id}</td>
        <td>{employee.name}</td>
        <td>{employee.position}</td>
        {user.name ? (
          <td>
            <Link to={"/form/Update Employee Position/"+employee.name}>
              <i className="fas fa-pencil-alt"></i>
            </Link>
            <Link to={"/form/Remove Employee/"+employee.name}>
              <i className="fas fa-trash-alt"></i>
            </Link>
          </td>
        ) : (
          <td></td>
        )}
      </tr>
    );
  };

  return (
    <section id="employee-list">
      <h1 id="employee-list-title" className="font-weight-bolder">
        Employee List
        <button
          id="refresh-employees"
          className="btn btn-primary"
          onClick={refreshEmployees}
        >
          <i className="fas fa-redo-alt"></i>
          Refresh
        </button>
      </h1>
      <table
        id="employee-table"
        className="table table-dark table-striped table-hover"
      >
        <thead>
          <tr>
            <th className="no-top-border">ID</th>
            <th>Employee Name</th>
            <th>Position</th>
            {user.name ? <th className="no-top-border">Edit</th> : ""}
          </tr>
        </thead>
        <tbody id="employee-list-table-body">
          {employees.map((employee) => insertTableData(employee))}
          {user.name ? (
            <tr className="bg-success">
              <td>
                <Link to="/form?action=add" className="font-weight-bolder">
                  +
                </Link>
              </td>
              <td className="font-weight-bold text-center" colSpan="2">
                <Link to="/form?action=add">Add New Employee</Link>
              </td>
              <td>
                <Link to="/form?action=add">
                  <i className="fas fa-user-plus"></i>
                </Link>
              </td>
            </tr>
          ) : (
            ""
          )}
        </tbody>
      </table>
    </section>
  );
};

export default EmployeeTable;
