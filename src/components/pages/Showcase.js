import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Showcase = () => {
  const user = useSelector((store) => store);

  return (
    <div className="showcase">
      <div className="showcase-container">
        <div className="showcase-content">
          <h2>Construction Company Management Portal</h2>
          This is a web portal for listing, adding, updating, and removing employees from ConstructCo's rosters. You must login as an admin before having access to the edit page, but you are free to view the list of employees without admin credentials.
          <br />
          <br />
          <Link to="/view">
            <button type="button" className="btn btn-warning">
              <i className="fas fa-th-list"></i>
              View List of Employees
            </button>
          </Link>
          <br />
          <br />
          {!user.name ? (
            <Link to="/user">
              <button type="button" className="btn btn-warning">
                <i className="fas fa-sign-in-alt"></i>
                Login to Portal
              </button>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
