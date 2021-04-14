import React, { useContext } from "react";
import { providerFunctions } from "../provider/FunctionsProvider";
import { Link } from "react-router-dom";

export default function Header() {
  const { showSideBar, setShowSideBar, userDetails } = useContext(
    providerFunctions
  );

  console.log(userDetails.user.name);

  return (
    <div className="header">
      <nav className="navbar navbar-expand navbar-light navbar-bg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="../../assets/img/Group-73.png"
              alt=""
              width="80"
              height="31"
              className="d-inline-block align-top"
            />
          </a>

          <div
            className="navbar-btn"
            onClick={() => {
              setShowSideBar(!showSideBar);
            }}
          >
            <a className="sidebar-toggle d-flex collapsed">
              <img
                src="../../assets/img/Group-76.svg"
                alt=""
                width="36"
                height="14"
                className="btn-toggle-fullwidth"
              />
            </a>
          </div>

          <div className="navbar-collapse collapse">
            <form className="d-none d-sm-inline-block">
              <div className="input-group input-group-navbar">
                <img
                  src="../../assets/img/search-1.svg"
                  alt=""
                  width="30"
                  height="30"
                  className="form-icon"
                />
                <input
                  type="text"
                  className="form-control header-form"
                  placeholder="Search anything"
                  aria-label="Search"
                />
              </div>
            </form>

            <div className="dropdown">
              <a
                className="nav-icon dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="../../assets/img/Group-61.svg"
                  alt=""
                  width="20"
                  height="40"
                  className="notifik"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenu2"
              >
                <li>
                  <button className="dropdown-item" type="button">
                    Action
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Another action
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Something else here
                  </button>
                </li>
              </ul>
            </div>

            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="../../assets/img/Ellipse-16.png"
                  className="avatar img-fluid rounded mr-1"
                  alt="Charles Hall"
                />
                <span className="text-dark">
                  &nbsp; {userDetails.user.name}
                </span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link to="/settings" className="hd-dropdown-lnk">
                    <button className="dropdown-item" type="button">
                      Profile
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/campaign" className="hd-dropdown-lnk">
                    <button className="dropdown-item" type="button">
                      Campaign
                    </button>
                  </Link>
                </li>
                <li>
                  <Link className="hd-dropdown-lnk">
                    <button className="dropdown-item" type="button">
                      Log Out
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}