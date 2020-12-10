import Axios from 'axios';
import React, { Component } from 'react';

const logout = () => {
  Axios.get('http://3.17.206.158:8080/EmployeeServer/user', { withCredentials: true })
    .then((resp) => console.log(resp));
}

export default class LoginPage extends Component {
  //if logged in, show logout btn, if no session, show name/code form w submit btn
  constructor(props) {
    super(props);
    this.state = {
      // value: ''
      name: '',
      code: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  //even if correct creds, the cookie is not established. probably have to handle this data to make it happen
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name + ' With a code of: ' + this.state.code);
    event.preventDefault();
    const postRequest = Axios.post('http://3.17.206.158:8080/EmployeeServer/user', this.state, { withCredentials: true })
      .then((resp) => {console.log(resp)});
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <h3>Login to the Employee Server</h3>
        <div className="form-group">
            <label htmlFor="input-name">Employee Name</label>
            <input
              type="text"
              className="form-control"
              id="input-name"
              placeholder="Enter employee name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="input-code">Code</label>
            <input
              type="password"
              className="form-control"
              id="input-code"
              placeholder="0000"
              name="code"
              value={this.state.code}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <button onClick={logout}>Logout</button>
      </div>
    )
  }
}
