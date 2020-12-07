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
        <nav class="">
          <div class="nav-container">
            <div class="logo"><a href="index.html">ConstructCo.</a></div>
            <ul>
              <li><a class="current-page" href="index.html">Home</a></li>
              <li><a class="" href="list.html">Employee List</a></li>
              <li><a class="" href="form.html">Form</a></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
