import React from "react";

export default class Showcase extends React.Component {
  //fetch & state
    //state changes independently based on app
  state = {
    items: []
  }

  render(){
    return (
      <header>
        <nav className="">
          <div className="nav-container">
            <div className="logo"><a href="index.html">ConstructCo.</a></div>
            <ul>
              <li><a className="current-page" href="index.html">Home</a></li>
              <li><a className="" href="list.html">Employee List</a></li>
              <li><a className="" href="form.html">Form</a></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
