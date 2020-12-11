import React, { Component } from 'react'
import Axios from "axios";

export default class AddEmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // action: "",
      name: "",
      position: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    alert(
      "A name was submitted: " +
        this.state.name +
        " and position of: " +
        this.state.position
    );
    event.preventDefault();
    Axios.post("http://3.17.206.158:8080/EmployeeServer/employee", this.state, {
      withCredentials: true,
    }).then((resp) => console.log(resp));
    this.props.history.push('/view');
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <h3>Edit Employees</h3>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">
              What do you want to do?
            </label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              name="action"
              // value={this.state.action}
              // onChange={this.handleChange}
            >
              <option>Add Employee</option>
              <option>Update Employee Position</option>
              <option>Remove Employee</option>
            </select>
          </div>
          {/* <FunctionalForms upstate={this.state} upchange={this.handleChange} /> */}
          <div className="form-group">
            <label htmlFor="name-input">Employee Name</label>
            <input
              type="text"
              className="form-control"
              id="name-input"
              placeholder="Enter employee name"
              name="name"
              // value={upstate.name}
              // onChange={upchange}
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Employee Position</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              name="position"
              // value={upstate.position}
              // onChange={upchange}
              value={this.state.position}
              onChange={this.handleChange}
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
  }
}
