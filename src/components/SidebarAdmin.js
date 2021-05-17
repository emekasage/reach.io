import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { providerFunctions } from "../provider/FunctionsProvider";

export default function Sidebar() {
  const { adminLogout, showSideBar } = useContext(providerFunctions);
  const [showToolTip, setshowToolTip] = useState(false);

  const handleLogout = () => {
    setshowToolTip(true);
  };

  const handleCancel = () => {
    console.log("working");
    setshowToolTip(false);
  };

  return (
    <div id="sidebar-nav" className={`sidebar ${showSideBar ? "" : "reduce"}`}>
      <div className="nav-options">
        <nav>
          <ul className="navigate">
            <li>
              <NavLink
                to="/admin/dashboard"
                className="nav"
                activeClassName="nav--active"
              >
                <i className="bi bi-house-door menu-img"></i>
                <span className="menu-text">Overview</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/clients"
                className="nav"
                activeClassName="nav--active"
              >
                <i className="bi bi-clipboard-data menu-img"></i>
                <span className="menu-text">Admin</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/settings"
                className="nav"
                activeClassName="nav--active"
              >
                <i className="bi bi-gear menu-img"></i>
                <span className="menu-text">Settings</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/campaign"
                className="nav"
                activeClassName="nav--active"
              >
                <i className="bi bi-megaphone"></i>
                <span className="menu-text">Campaign</span>
              </NavLink>
            </li>
          </ul>
          <ul className="navigate-log">
            <li>
              <div className="nav2">
                <i
                  className="bi bi-box-arrow-right menu-img-2"
                  onClick={handleLogout}
                ></i>
                <span className="menu-text-2" onClick={handleLogout}>
                  Log Out
                </span>
                {showToolTip ? (
                  <div className="tooltipCont">
                    <button
                      className="btn btn-info button"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => adminLogout()}
                      className="btn btn-danger"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
