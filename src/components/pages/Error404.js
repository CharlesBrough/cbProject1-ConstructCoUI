import React, { Component } from "react";

export default class Error404 extends Component {
  render() {
    return (
      <div className="h-100 d-flex justify-content-center align-items-center">
        <div className="caution-container">
          <div className="error-404 text-center">Error 404! Page not found.</div>
        </div>
      </div>
    );
  }
}
