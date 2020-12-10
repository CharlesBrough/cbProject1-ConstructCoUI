import React from "react";

class FormPage extends React.Component {
  // check login first?
  constructor(props) {
    super(props);
    this.state = {
      // value: '',
      name: '',
      position: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
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
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Add Employee</option>
              <option>Update Employee Position</option>
              <option>Remove Employee</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="name-input">Employee Name</label>
            <input
              type="text"
              className="form-control"
              id="name-input"
              aria-describedby="emailHelp"
              placeholder="Enter employee name"
              value={this.state.value}
              onChange={this.handleChange}
            />
            {/* <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small> */}
          </div>
          {/* <div className="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div> */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default FormPage;
