import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

//react component
class ViewPage extends React.Component {
  state = { employees: [] };

  componentDidMount() {
    Axios.get("http://3.17.206.158:8080/Project0/test2")
      .then((resp) => {
        const employees = resp.data;
        this.setState({ employees });
      });
  }

  render() {
    return (
      <section id="employee-list">
        <h1 id="employee-list-title" className="font-weight-bolder">Employee List</h1>
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
            {this.state.employees.map((employee) => {
              return (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.position}</td>
                  <td>
                    <Link to="/form?name=test">
                      <i className="fas fa-pencil-alt"></i>
                    </Link>
                    <Link to="/form?name=test&type=del">
                      <i className="fas fa-trash-alt"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
            <tr className="bg-success">
              <td>+</td>
              <td className="font-weight-bold text-center" colSpan="2">Add New Employee</td>
              <td>
                <Link to="/form?name=test">
                  <i className="fas fa-user-plus"></i>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default ViewPage;
