import React from "react";
import { Link } from "react-router-dom";

export default class Showcase extends React.Component {
  //fetch & state
    //state changes independently based on app
  state = {
    items: []
  }

  render(){
    return (
      <div className="showcase">
        <div className="showcase-container">
          <div className="showcase-content">
            <h2>Construction Company Management Portal</h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
            ducimus non! Placeat maiores suscipit atque doloribus, corrupti
            possimus consectetur explicabo ad eveniet eos quae nam excepturi
            minima saepe dolorem earum.
            <br />
            <br />
            <Link to="/view">
              <button
                type="button"
                className="btn btn-warning"
                // onClick={() => console.log("change state n swap content")}
              >
                <i className="fas fa-th-list"></i>
                View List of Employees
              </button>
            </Link>
            <br />
            <br />
            <Link to="/user">
              <button
                type="button"
                className="btn btn-warning"
                // onClick={() => console.log("change state n swap content")}
              >
                <i className="fas fa-sign-in-alt"></i>
                Login to Portal
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
