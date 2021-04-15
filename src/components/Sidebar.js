import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { providerFunctions } from "../provider/FunctionsProvider";

export default function Sidebar() {
  const { showSideBar, logout } = useContext(providerFunctions);
  const [showTooltip, setShowToolTip] = useState(false);

  const handleLogout = () => {
    setShowToolTip(true);
  };
  return (
    <div id="sidebar-nav" className={`sidebar ${showSideBar ? "" : "reduce"}`}>
      <div className="nav-options">
        <nav>
          <ul className="navigate">
            <li>
              <NavLink
                to="/dashboard"
                className="nav"
                activeClassName="nav--active"
              >
                <i className="bi bi-house-door menu-img"></i>
                <span className="menu-text">Overview</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className="nav"
                activeClassName="nav--active"
              >
                <i className="bi bi-people menu-img"></i>
                <span className="menu-text">Connections</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                className="nav"
                activeClassName="nav--active"
              >
                <i className="bi bi-gear menu-img"></i>
                <span className="menu-text">Settings</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/campaign"
                className="nav"
                activeClassName="nav--active"
              >
                <i className="bi bi-megaphone"></i>
                <span className="menu-text">Campaign</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/buycredit"
                className="nav"
                activeClassName="nav--active"
              >
                <i className="bi bi-wallet2"></i>
                <span className="menu-text">Credit</span>
              </NavLink>
            </li>
          </ul>
          <ul className="navigate-log">
            <li>
              <div className="nav2">
                <i className="bi bi-box-arrow-right menu-img-2"></i>
                <span
                  className="menu-text-2"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Log Out
                  {showTooltip && (
                    <div className="position-absolute tooltipCont tooltipCont">
                      <button
                        className="btn btn-info button"
                        onClick={() => {
                          setShowToolTip(false);
                          !handleLogout();
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => logout()}
                        className="btn btn-danger"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
