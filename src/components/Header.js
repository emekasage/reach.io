import React, { useContext, useEffect, useState } from "react";
import { providerFunctions } from "../provider/FunctionsProvider";
import { Link } from "react-router-dom";
import moment from "moment";

export default function Header() {
  const {
    showSideBar,
    setShowSideBar,
    userDetails,
    userNotifications,
    userAlert,
    logout,
  } = useContext(providerFunctions);

  const [notify, setNotify] = useState([]);

  useEffect(() => {
    userNotifications();
  }, []);

  useEffect(() => {
    if (typeof userAlert.notifications !== "undefined") {
      setNotify(userAlert.notifications);
      // console.log(userAlert.notifications);
    }
  }, [userAlert]);

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
                className="dropdown-menu dropdown-menu-end notify-drop"
                aria-labelledby="dropdownMenu2"
              >
                <h6 className="notify-head">{notify.length} Notifications</h6>
                {console.log("test", notify)}
                {notify.length !== 0 ? (
                  notify.map((thisNotifyData, index) => {
                    if (index < 5) {
                      return (
                        <li key={index} className="notify-data">
                          <p className="dropdown-item notify-msg">
                            {thisNotifyData.data.message}
                          </p>
                          <span className="notify-time">
                            {moment(thisNotifyData.created_at).fromNow()}
                          </span>
                        </li>
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
