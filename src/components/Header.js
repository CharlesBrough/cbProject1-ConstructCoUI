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
            <div className="logo"><a href="/">ConstructCo.</a></div>
            <ul>
              <li><button className={(window.location.pathname === "/") ? "nav-btn current-page" : "nav-btn"} onClick={() => console.log('home btn clicked')}>Home</button></li>
              <li><button className={(window.location.pathname === "/view") ? "nav-btn current-page" : "nav-btn"} onClick={() => console.log('list btn clicked')}>Employee List</button></li>
              <li><button className={(window.location.pathname === "/form") ? "nav-btn current-page" : "nav-btn"} onClick={() => console.log('form btn clicked')}>Edit</button></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
