import React, { useContext } from "react";
import { providerFunctions } from "../provider/FunctionsProvider";
import { Link } from "react-router-dom";

export default function Header() {
  const { showSideBar, setShowSideBar, userDetails, logout } = useContext(
    providerFunctions
  );

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
                  src={
                    userDetails.user.avatar !== null
                      ? userDetails.user.avatar
                      : "https://www.seekpng.com/png/detail/514-5147412_default-avatar-icon.png"
                  }
                  alt={userDetails.user.name}
                  style={{
                    background: "url(" + userDetails.user.avatar + " ) ",
                    width: "2.5em",
                    height: "2.5em",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "50%",
                    margin: "0 auto",
                  }}
                />
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <span className="text-dark htxt">
                    {userDetails.user.name}
                  </span>
                </li>
                <li>
                  <span className="text-muted htxt">
                    {userDetails.user.email}
                  </span>
                </li>
                <li style={{ paddingTop: "5px" }}>
                  <Link to="/admin/settings" className="hd-dropdown-lnk">
                    <button className="dropdown-item" type="button">
                      Profile
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/admin/campaign" className="hd-dropdown-lnk">
                    <button className="dropdown-item" type="button">
                      Campaign
                    </button>
                  </Link>
                </li>
                <li>
                  <Link className="hd-dropdown-lnk">
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => logout()}
                    >
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
