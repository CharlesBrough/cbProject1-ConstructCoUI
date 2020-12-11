import React from 'react'

function FunctionalForms({ upstate, upchange }) {
  return (
    <>
    <div className="form-group">
      <label htmlFor="name-input">Employee Name</label>
      <input
        type="text"
        className="form-control"
        id="name-input"
        placeholder="Enter employee name"
        name="name"
        value={upstate.name}
        onChange={upchange}
        // value={this.state.name}
        // onChange={this.handleChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="exampleFormControlSelect1">
        Employee Position
      </label>
      <select
      className="form-control" id="exampleFormControlSelect1"
      name="position"
      value={upstate.position}
      onChange={upchange}
      // value={this.state.position}
      // onChange={this.handleChange}
      >
        <option>CEO</option>
        <option>Contractor</option>
        <option>Installer</option>
        <option>HR</option>
      </select>
    </div>
    </>
  )
}

export default FunctionalForms
