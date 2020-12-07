import React from "react";

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
          <br /><br />
          <button type="button" className="btn btn-primary"
          onClick={() => console.log('change state n swap content')}>
            View List of Employees
          </button>
        </div>
      </div>
    </div>
    )
  }
}
