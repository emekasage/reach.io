/* eslint-disable react/jsx-key */
import React, { useContext, useState, useEffect } from "react";
import { providerFunctions } from "../../provider/FunctionsProvider";
import DateTime from "../../components/DateTime";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";

export default function ClientsInner() {
  const {
    banUser,
    activateUser,
    showSideBar,
    allUsers,
    getAllUsers,
  } = useContext(providerFunctions);

  useEffect(() => {
    getAllUsers();
  }, []);
  useEffect(() => {
    if (typeof allUsers.Users !== "undefined") {
      setClientsData(allUsers.Users);
      console.log(allUsers.Users);
    }
  }, [allUsers]);

  const [clientsData, setClientsData] = useState([]);

  const [paginatedClients, setpaginatedClients] = useState([]);
  const [clientsToDisplay, setClientsToDisplay] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [, setNumberOfClient] = useState(0);
  const [viewAll, setViewAll] = useState(false);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [userProf, setUserProf] = useState({});

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
    setNumberOfClient(no_of_clients);
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
        {page === 1 && (
          <div>
            <div className="d-flex justify-content-between user-val">
              <div className="heading-col">
                <h5>
                  <strong>Clients</strong>
                </h5>
              </div>
              <div className="date-form">
                <DateTime />
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-lg-12 col-xxl-12 d-flex user-tab">
                <div className="card flex-fill">
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
                    </div>
                  </div>
                  <table className="table table-hover my-1 table-responsive">
                    <thead>
                      <tr>
                        <th scope="col">S/N</th>
                        <th>Name</th>
                        <th className="d-none d-xl-table-cell">
                          Email Address
                        </th>
                        <th className="d-none d-xl-table-cell">
                          Phone Numbers
                        </th>
                        <th className="d-none d-xl-table-cell">Status</th>
                        <th>Actions</th>
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
                            <td>
                              <div
                                className="user-lnk"
                                onClick={() => {
                                  setUserProf(thisClientData);
                                  console.log(clientsToDisplay);
                                  setPage(2);
                                }}
                              >
                                {thisClientData.name}
                              </div>
                            </td>
                            <td className="d-none d-xl-table-cell">
                              <div
                                className="user-lnk"
                                onClick={() => {
                                  setUserProf(thisClientData);
                                  setPage(2);
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
                                  console.log(userProf);
                                  setPage(2);
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
                                    onClick={() => banUser(thisClientData.id)}
                                  ></i>
                                </Link>
                              )}
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
              </div>
            </div>
          </div>
        )}

        {page === 2 && (
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
                      setPage(1);
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
                          background: "url(" + userProf.avatar + " ) ",
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
                        <p>11</p>
                        <p>10</p>
                      </div>
                    </div>
                    <div className="admin-actions">
                      <button className="admin-activate">Activate User</button>
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
          </div>
        )}
      </div>
    </div>
  );
}
