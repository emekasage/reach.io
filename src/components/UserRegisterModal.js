import React from "react";
import { Link } from "react-router-dom";

export default function UserRegisterModal(props) {
  return (
    <div>
      <div className="card-header d-flex justify-content-center mod-head">
        <div className="mod-title">
          <h4>Do you want to create your first campaign?</h4>
        </div>
      </div>

      <div className="my-3 justify-content-between mod-regbtn">
        <Link to="campaign">
          <button
            className="yes-btn"
            onClick={() => {
              // eslint-disable-next-line react/prop-types
              props.setShowModal(false);
            }}
          >
            Yes
          </button>
        </Link>
        <button
          className="no-btn"
          onClick={() => {
            // eslint-disable-next-line react/prop-types
            props.setShowModal(false);
          }}
        >
          No
        </button>
      </div>
    </div>
  );
}
