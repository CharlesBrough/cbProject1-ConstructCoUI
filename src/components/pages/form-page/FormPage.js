import React from "react";
import AddEmployeeForm from "./AddEmployeeForm.js";

export default class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <AddEmployeeForm />
    )
  }
}
