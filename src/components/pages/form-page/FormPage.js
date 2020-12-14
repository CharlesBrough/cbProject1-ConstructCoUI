import React, { useEffect, useState } from "react";
import AddEmployeeForm from "./AddEmployeeForm.js";
import UpdateEmployeeForm from "./UpdateEmployeeForm.js";
import RemoveEmployeeForm from "./RemoveEmployeeForm.js";
import { useParams } from "react-router-dom";

const FormPage = () => {
  const { passedAction } = useParams();

  const [action, setAction] = useState({
    action: "Add Employee",
  });

  const handleChange = (e) => {
    setAction({ ...action, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (passedAction !== undefined) {
      setAction({...action, action: passedAction });
    }
    // eslint-disable-next-line
  }, []);

  const renderSwitch = (param) => {
      switch (param) {
        case "Add Employee":
          return <AddEmployeeForm />;
        case "Update Employee Position":
          return <UpdateEmployeeForm />;
        case "Remove Employee":
          return <RemoveEmployeeForm />;
        default:
          return "somehow unselected!";
    }
  }

  return (
    <>
      <div className="form-container first">
        <h2 className="font-weight-bold">Edit Employees</h2>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">
            What do you want to do?
          </label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            name="action"
            value={action.action}
            onChange={handleChange}
          >
            <option>Add Employee</option>
            <option>Update Employee Position</option>
            <option>Remove Employee</option>
          </select>
        </div>
      </div>
      {renderSwitch(action.action)}
    </>
  );
};

export default FormPage;
