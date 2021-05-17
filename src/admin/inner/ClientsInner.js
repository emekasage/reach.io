/* eslint-disable react/jsx-key */
import React, { useContext, useState, useEffect } from "react";
import { providerFunctions } from "../../provider/FunctionsProvider";
import DateTime from "../../components/DateTime";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import moment from "moment";

export default function ClientsInner() {
  const {
    banUser,
    activateUser,
    showSideBar,
    setUserId,
    allUsers,
    getAllUsers,
    getUserInfo,
    setShowModal,
    setModalPage,
    managedRoles,
    rolesManagement,
    setRoleId,
  } = useContext(providerFunctions);
  const [clientsData, setClientsData] = useState([]);
  const [rolesData, setRolesData] = useState([]);

  const [paginatedClients, setpaginatedClients] = useState([]);
  const [clientsToDisplay, setClientsToDisplay] = useState([]);
  const [innerPage, setInnerPage] = useState(1);
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [viewAll, setViewAll] = useState(false);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [userProf, setUserProf] = useState({});
  const [userCD, setUserCD] = useState({});
  useEffect(() => {
    getAllUsers();
    rolesManagement();
  }, []);

  useEffect(() => {
    if (typeof allUsers.Users !== "undefined") {
      setClientsData(allUsers.Users);
      // console.log(allUsers.Users);
    }
  }, [allUsers]);

  useEffect(() => {
    // console.log(managedRoles.Roles);
    if (typeof managedRoles.Roles !== "undefined") {
      if (typeof managedRoles.Roles.data !== "undefined") {
        setRolesData(managedRoles.Roles.data);
      }
    }
  }, [managedRoles]);

  useEffect(() => {
    if (typeof userProf.id !== "undefined") {
      getUserInfo(userProf.id).then((u) => {
        setUserCD(u);
        return u;
      });
    }
  }, [userProf]);

  useEffect(() => {
    if (typeof clientsData[0] !== "undefined") {
      let tempdata = clientsData.filter((thisdata) => {
        var zz = thisdata.name.toLowerCase();
        var mm = thisdata.email.toLowerCase();
        var yy = searchData.toLowerCase();
        if (zz.includes(yy)) {
          return true;
        } else if (mm.includes(yy)) {
          return true;
        } else {
          return false;
        }
      });
      setRows(tempdata);
    }
  }, [clientsData, searchData]);

  useEffect(() => {
    getpaginatedClients(page);
  }, [page, rows]);

  useEffect(() => {
    if (viewAll) {
      setClientsToDisplay(rows);
    } else {
      setClientsToDisplay(paginatedClients);
    }
  }, [viewAll, clientsData, paginatedClients]);

  const getpaginatedClients = (page) => {
    var no_of_clients = rows.length;
    setPageCount(Math.ceil(Number(no_of_clients) / Number(perPage)));
    var cc = rows.filter((thisdata, index) => {
      var pageFirst = (page - 1) * perPage;
      var lastItem = page * perPage - 1;
      if (index >= pageFirst && index <= lastItem) {
        return true;
      } else {
        return false;
      }
    });
    setpaginatedClients(cc);
  };

  const showPaginationList = () => {
    let arr = Array.apply(null, { length: pageCount }).map(Number.call, Number);
    return (
      <ul className="pgntr">
        <li
          className="page-item page-link"
          onClick={() => (page !== 1 ? setPage(page - 1) : "")}
        >
          Prev
        </li>
        {arr.map((item) => {
          return (
            <li
              className={`page-item  page-link ${
                page === item + 1 ? "active" : ""
              }`}
              onClick={() => setPage(item + 1)}
            >
              {item + 1}
            </li>
          );
        })}
        <li
          className="page-item page-link"
          onClick={() => (page !== pageCount ? setPage(page + 1) : "")}
        >
          Next
        </li>
      </ul>
    );
  };

  return (
    <div className={`pagebody ${showSideBar ? "" : "expand"}`}>
      <div className="container-fluid p-0">
        {innerPage === 1 && (
          <div>
            <div className="d-flex justify-content-between user-val">
              <div className="heading-col">
                <h5>
                  <strong>Admin</strong>
                </h5>
              </div>
              <div className="date-form">
                <DateTime />
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-lg-12 col-xxl-12 d-flex user-tab">
                <div className="card flex-fill">
                  <div className="role-nav">
                    <ul
                      className="nav nav-pills role-tabs"
                      id="pills-tab02"
                      role="tablist"
                    >
                      <li className="nav-item one-user">
                        <button
                          className="nav-link active mx-1 usr-btn"
                          id="pills-user-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-users"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          Users
                        </button>
                      </li>
                      <li className="nav-item two-role">
                        <button
                          className="nav-link mx-1 usr-btn"
                          id="pills-role-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-roles"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="false"
                        >
                          Roles
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" id="pills-tabContent">
                    {/* USERS TAB */}
                    <div
                      className="tab-pane fade show active"
                      id="pills-users"
                      role="tabpanel"
                      aria-labelledby="pills-user-tab"
                    >
                      <div className="card-header table-card-head d-flex justify-content-between">
                        <h5 className="card-title mb-0 table-title">Clients</h5>
                        <div className="dashboard-attr">
                          <div className="input-group input-group-navbar2">
                            <img
                              src="../../assets/img/search-1.svg"
                              alt=""
                              width="30"
                              height="50"
                              className="search-icon"
                            />
                            <input
                              type="text"
                              className="form-control search-field"
                              placeholder="Search by email or name"
                              value={searchData}
                              onChange={(e) => {
                                setSearchData(e.target.value);
                              }}
                            />
                          </div>
                          <CSVLink
                            data={clientsData}
                            download="Reachio-Clients-list.csv"
                            className="csv-link"
                          >
                            <button type="button" className="btn-dashboard">
                              Dashboard list
                            </button>
                          </CSVLink>
                          <button
                            type="button"
                            className="btn-dashboard"
                            onClick={() => {
                              setShowModal(true);
                              setModalPage("create_user");
                            }}
                          >
                            <i className="bi bi-person-plus user-plus"></i>
                            Add New User
                          </button>
                        </div>
                      </div>
                      <table className="table table-hover my-1 table-responsive">
                        <thead>
                          <tr>
                            <th scope="col">S/N</th>
                            <th style={{ width: "25%" }}>Name</th>
                            <th style={{ width: "25%" }}>Email Address</th>
                            <th style={{ width: "20%" }}>Phone Numbers</th>
                            <th style={{ width: "10%" }}>Status</th>
                            <th style={{ width: "15%" }}>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {clientsToDisplay.map((thisClientData, index) => {
                            return (
                              <tr key={index}>
                                <td>
                                  {!viewAll
                                    ? (page - 1) * perPage + (index + 1)
                                    : index + 1}
                                </td>
                                <td
                                  onClick={() => {
                                    setUserProf(thisClientData);
                                    setInnerPage(2);
                                  }}
                                >
                                  <div className="user-lnk">
                                    {thisClientData.name}
                                  </div>
                                </td>
                                <td className="d-none d-xl-table-cell">
                                  <div
                                    className="user-lnk"
                                    onClick={() => {
                                      setUserProf(thisClientData);
                                      setInnerPage(2);
                                    }}
                                  >
                                    {thisClientData.email}
                                  </div>
                                </td>
                                <td className="d-none d-xl-table-cell">
                                  <div
                                    className="user-lnk"
                                    onClick={() => {
                                      setUserProf(thisClientData);
                                      setInnerPage(2);
                                    }}
                                  >
                                    {thisClientData.phone}
                                  </div>
                                </td>
                                <td className="d-none d-xl-table-cell">
                                  {thisClientData.status}
                                </td>
                                <td>
                                  {thisClientData.status === "inactive" && (
                                    <Link to="#" className="table-icons">
                                      <i
                                        className="bi-box-arrow-in-right tabic"
                                        onClick={() =>
                                          activateUser(thisClientData.id)
                                        }
                                      ></i>
                                    </Link>
                                  )}
                                  {thisClientData.status === "active" && (
                                    <Link to="#" className="table-icons">
                                      <i
                                        className="bi bi-slash-circle tabic"
                                        onClick={() =>
                                          banUser(thisClientData.id)
                                        }
                                      ></i>
                                    </Link>
                                  )}
                                  <i
                                    className="bi bi-trash"
                                    onClick={() => {
                                      setShowModal(true);
                                      setModalPage("delete_user");
                                      setUserId(thisClientData.id);
                                    }}
                                  ></i>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                      <div className="d-flex justify-content-between table-feat">
                        <div
                          className="view-more-link"
                          onClick={() => setViewAll(!viewAll)}
                        >
                          {" "}
                          {!viewAll ? "View all" : "Show Less"}{" "}
                        </div>
                        <nav aria-label="Page navigation example">
                          {viewAll ? "" : showPaginationList()}
                        </nav>
                      </div>
                    </div>
                    {/* ROLES TAB */}
                    <div
                      className="tab-pane fade"
                      id="pills-roles"
                      role="tabpanel"
                      aria-labelledby="pills-role-tab"
                    >
                      <div className="card-header table-card-head d-flex justify-content-between">
                        <h5 className="card-title mb-0 table-title">
                          Roles and Permissions
                        </h5>
                        <div className="dashboard-attr">
                          <button
                            type="button"
                            className="btn-dashboard"
                            onClick={() => {
                              setShowModal(true);
                              setModalPage("create_role");
                            }}
                          >
                            <i className="bi bi-person-plus user-plus"></i>
                            New Roles and Permissions
                          </button>
                        </div>
                      </div>
                      <table className="table table-hover my-1 table-responsive">
                        <thead>
                          <tr>
                            <th scope="col">S/N</th>
                            <th style={{ width: "25%" }}>Role Name</th>
                            <th style={{ width: "30%" }}>Created On</th>
                            <th style={{ width: "35%" }}>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rolesData.map((thisRolesData, index) => {
                            return (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                  <div className="user-lnk">
                                    {thisRolesData.name}
                                  </div>
                                </td>
                                <td className="created-on">
                                  {moment(thisRolesData.created_at).format(
                                    "lll"
                                  )}
                                </td>
                                <td className="d-none d-xl-table-cell">
                                  <div className="roltab-icons">
                                    <i
                                      className="bi bi-pencil-square roltab1"
                                      onClick={() => {
                                        setShowModal(true);
                                        setModalPage("update_role");
                                        setRoleId(thisRolesData.id);
                                      }}
                                    ></i>
                                    <i
                                      className="bi bi-trash roltab2"
                                      onClick={() => {
                                        setShowModal(true);
                                        setModalPage("delete_role");
                                        setRoleId(thisRolesData.id);
                                      }}
                                    ></i>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {innerPage === 2 && (
          <div>
            <div className="d-flex justify-content-between user-val">
              <div className="heading-col">
                <h5>
                  <strong>User/Profile</strong>
                </h5>
              </div>
              <div className="date-form">
                <DateTime />
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-lg-12 col-xxl-12 d-flex user-tab client-profile">
                <div className="card flex-fill">
                  <a
                    className="clientback-lnk"
                    onClick={() => {
                      setInnerPage(1);
                    }}
                  >
                    Go back
                  </a>
                  <div className="card-header table-card-head d-flex justify-content-between usr-pfl">
                    <div className="user-info">
                      <img
                        src={
                          userProf.avatar !== "undefined"
                            ? userProf.avatar
                            : "../../assets/img/profile-avatar.png"
                        }
                        style={{
                          background:
                            "url(" +
                            userProf.avatar +
                            "../../assets/img/profile-avatar.png)",
                          width: "5em",
                          height: "5em",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          borderRadius: "50%",
                          margin: "0 auto",
                        }}
                        alt="display-picture"
                      />
                      <div className="user-txt-info">
                        {/* {JSON.stringify(userCD)} */}
                        <h6>{userProf.name}</h6>
                        <p>{userProf.email}</p>
                        <p>{userProf.phone}</p>
                      </div>
                    </div>
                    <div className="user-campdets">
                      <div className="camp-wrds">
                        <p>Campaign</p>
                        <p>Connections</p>
                      </div>
                      <div className="camp-nos">
                        <p>{userCD.campaigns}</p>
                        <p>{userCD.connections}</p>
                      </div>
                    </div>
                    <div className="admin-actions">
                      {/* <button className="admin-activate">Delete User</button> */}
                      <button
                        className="admin-activate"
                        onClick={() => activateUser(userProf.id)}
                      >
                        Activate User
                      </button>
                      <button
                        className="admin-ban"
                        onClick={() => banUser(userProf.id)}
                      >
                        Ban User
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="campaign-dets">
              <h5>Campaign</h5>

              <p>
                Campaign Submitted <strong>({userCD.campaignSubmitted})</strong>
              </p>
              <p>
                Campaign Completed <strong>({userCD.campaignCompleted})</strong>
              </p>
              <p>
                Campaign Approved <strong>({userCD.campaignApproved})</strong>
              </p>
              <p>
                Campaign Declined <strong>({userCD.campaignDeclined})</strong>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
