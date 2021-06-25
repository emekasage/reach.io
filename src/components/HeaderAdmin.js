import React, { useContext, useEffect, useState } from "react";
import { providerFunctions } from "../provider/FunctionsProvider";
import { Link } from "react-router-dom";
import moment from "moment";

export default function Header() {
  const {
    showSideBar,
    setShowSideBar,
    userDetails,
    adminNotifications,
    adminAlert,
    adminLogout,
  } = useContext(providerFunctions);

  const [notify, setNotify] = useState([]);

  useEffect(() => {
    adminNotifications();
  }, []);

  useEffect(() => {
    if (typeof adminAlert.notifications !== "undefined") {
      setNotify(adminAlert.notifications);
      // console.log("test");
    }
  }, [adminAlert]);

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
            {/* <form className="d-none d-sm-inline-block">
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
            </form> */}

            <div className="dropdown">
              <a
                className="nav-icon dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="bi bi-bell notifik"></span>
                <span className="badge">{notify.length}</span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end notify-drop"
                aria-labelledby="dropdownMenu2"
              >
                <h6 className="notify-head">{notify.length} Notifications</h6>
                {/* {console.log("test", adminAlert.notifications)} */}
                {notify.length !== 0 ? (
                  notify.map((thisAdminAlertData, index) => {
                    if (index < 5) {
                      return (
                        <>
                          <li key={index} className="notify-data">
                            <p className="dropdown-item notify-msg">
                              {thisAdminAlertData.data.message}
                              {/* {console.log(thisAdminAlertData.data.message)} */}
                            </p>
                            <span className="notify-time">
                              {moment(thisAdminAlertData.created_at).fromNow()}
                            </span>
                          </li>
                        </>
                      );
                    }
                  })
                ) : (
                  <li>
                    <p className="dropdown-item">
                      You currently have no notifications
                    </p>
                  </li>
                )}
                <button className="notify-btn">View All</button>
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
                      onClick={() => adminLogout()}
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
