import React from "react";
import Axios from "axios";
import EmployeeTable from "./EmployeeTable";

//react component
class ViewPage extends React.Component {
  state = { employees: [] };

  componentDidMount() {
    Axios.get("http://3.17.206.158:8080/EmployeeServer/employee")
      .then((resp) => {
        const employees = resp.data;
        this.setState({ employees });
      });
  }

  render() {
    return (
      <EmployeeTable employees={this.state.employees}
      // refreshEmployees={ this.forceUpdate }
      />
    );
  }
}

export default ViewPage;
