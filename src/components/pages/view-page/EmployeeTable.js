import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeTable = ({ employees, refreshEmployees }) => {

  const insertTableData = (employee) => {
    return (
      <tr key={employee.id}>
        <td>{employee.id}</td>
        <td>{employee.name}</td>
        <td>{employee.position}</td>
        <td>
          <Link to={"/form?name="+employee.name}>
            <i className="fas fa-pencil-alt"></i>
          </Link>
          <Link to="/form?name=test&action=del">
            <i className="fas fa-trash-alt"></i>
          </Link>
        </td>
      </tr>
    );
  }

  return (
    <section id="employee-list">
      <h1 id="employee-list-title" className="font-weight-bolder">
        Employee List
      </h1>
      <div id="centerer">
        <button id="refresh-employees" className="btn btn-primary"
          onClick={refreshEmployees}
        >
          <i className="fas fa-redo-alt"></i>
          Refresh
        </button>
      </div>
      <table id="employee-table" className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th className="no-top-border">ID</th>
            <th>Employee Name</th>
            <th>Position</th>
            <th className="no-top-border">Edit</th>
          </tr>
        </thead>
        <tbody id="employee-list-table-body">
          {employees.map((employee) =>
            insertTableData(employee)
          )}
          <tr className="bg-success">
            <td>
              <Link to="/form?action=add" className="font-weight-bolder">+</Link>
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
        </tbody>
      </table>
    </section>
  );
}

export default EmployeeTable;
