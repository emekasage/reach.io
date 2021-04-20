/* eslint-disable react/jsx-key */
import React, { useContext, useState, useEffect } from "react";
import { providerFunctions } from "../provider/FunctionsProvider";
import DateTime from "../components/DateTime";

export default function ConnectionsInner() {
  const { showSideBar, userConnections, allConnections } = useContext(
    providerFunctions
  );

  useEffect(() => {
    userConnections();
  }, []);

  const [connectionsData, setConnectionsData] = useState([]);

  useEffect(() => {
    // console.log(allConnections.allConnections);
    if (typeof allConnections.allConnections !== "undefined") {
      if (typeof allConnections.allConnections.data !== "undefined") {
        // console.log(allConnections.allConnections);
        setConnectionsData(allConnections.allConnections.data);
      }
    }
  }, [allConnections]);

  useEffect(() => {
    console.log(connectionsData);
  }, [connectionsData]);

  const [paginatedClients, setpaginatedClients] = useState([]);
  const [clientsToDisplay, setClientsToDisplay] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [, setNumberOfClient] = useState(0);
  const [viewAll, setViewAll] = useState(false);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    if (typeof connectionsData[0] !== "undefined") {
      let tempdata = connectionsData.filter((thisdata) => {
        var zz = thisdata.Name.toLowerCase();
        var mm = thisdata.ContactEmail.toLowerCase();
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
  }, [connectionsData, searchData]);

  useEffect(() => {
    getpaginatedClients(page);
  }, [page, rows]);

  useEffect(() => {
    if (viewAll) {
      setClientsToDisplay(rows);
    } else {
      setClientsToDisplay(paginatedClients);
    }
  }, [viewAll, connectionsData, paginatedClients]);

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
        <div className="d-flex justify-content-between user-val">
          <div className="heading-col">
            <h5>
              <strong>Connections</strong>
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
                <h5 className="card-title mb-0 table-title">Connections</h5>
                <div className="dashboard-attr">
                  <div className="input-group input-group-navbar">
                    <img
                      src="assets/img/search-1.svg"
                      alt=""
                      width="30"
                      height="50"
                      className="form-icon"
                    />
                    <input
                      type="text"
                      className="form-control header-form"
                      placeholder="Search..."
                      value={searchData}
                      onChange={(e) => {
                        setSearchData(e.target.value);
                      }}
                    />
                  </div>
                  <button type="button" className="btn-dashboard">
                    Dashboard list
                  </button>
                </div>
              </div>
              <table className="table table-hover my-1">
                <thead>
                  <tr>
                    <th scope="col">S/N</th>
                    <th>Name</th>
                    <th className="d-none d-xl-table-cell">Email Address</th>
                    <th className="d-none d-xl-table-cell">Phone Numbers</th>
                    <th>Connected Status</th>
                    <th className="d-none d-md-table-cell">Connected on</th>
                  </tr>
                </thead>
                <tbody>
                  {clientsToDisplay.map((thisClientData, index) => {
                    return (
                      <tr>
                        <td>
                          {!viewAll
                            ? (page - 1) * perPage + (index + 1)
                            : index + 1}
                        </td>
                        <td>{thisClientData.Name}</td>
                        <td className="d-none d-xl-table-cell">
                          {thisClientData.ContactEmail}
                        </td>
                        <td className="d-none d-xl-table-cell">
                          {thisClientData.ContactMobile}
                        </td>
                        <td>
                          <span>{thisClientData.ConnectionStatus}</span>
                        </td>
                        <td className="d-none d-md-table-cell">
                          {thisClientData.ConnectedOn}
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
    </div>
  );
}
