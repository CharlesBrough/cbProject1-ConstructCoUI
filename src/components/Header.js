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
              <li><button className="nav-btn current-page" onClick={() => console.log('home btn clicked')}>Home</button></li>
              <li><button className="nav-btn" onClick={() => console.log('list btn clicked')}>Employee List</button></li>
              <li><button className="nav-btn" onClick={() => console.log('form btn clicked')}>Form</button></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
