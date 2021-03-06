import React, { useContext, useState, useEffect } from "react";
import { providerFunctions } from "../provider/FunctionsProvider";
import RadialChart from "../components/RadialChart";
import StackedBarChart from "../components/StackedBarChart";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";

export default function DashboardInner() {
  const [showRadial1, setShowRadial1] = useState(false);
  const [showRadial2, setShowRadial2] = useState(false);
  const [showRadial3, setShowRadial3] = useState(false);
  const [showRadial4, setShowRadial4] = useState(false);
  const {
    showSideBar,
    getAllUsers,
    connectionMetrics,
    connectMetrics,
    connectGraph,
    connectionGraph,
    userConnections,
    allConnections,
    userDetails,
  } = useContext(providerFunctions);

  useEffect(() => {
    getAllUsers();
  });

  useEffect(() => {
    connectionMetrics();
    connectionGraph();
  }, []);

  useEffect(() => {
    // console.log(connectGraph.mon);
  }, [connectGraph]);

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
    // console.log(connectionsData);
  }, [connectionsData]);

  return (
    <div className={`pagebody ${showSideBar ? "" : "expand"}`}>
      <div className="dashboardbox">
        <main className="content">
          <div className="container-fluid p-0">
            <div className="d-flex justify-content-between inner-text">
              <div className="heading-col">
                <h5 className="cred-rem">
                  <strong>Credit Remaining:</strong>{" "}
                  {typeof userDetails.userCredit.amount !== "undefined"
                    ? userDetails.userCredit.amount
                    : 0}
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-xxl-5 d-flex">
                <div className="w-100">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="card tiny-cards">
                        <div className="card-body">
                          <div
                            onClick={() => setShowRadial1(!showRadial1)}
                            className="d-flex justify-content-between top-card-content"
                          >
                            <h5 className="card-title mb-4">
                              No. of Connections
                            </h5>
                            <i className="bi bi-circle-half moon"></i>
                          </div>
                          <div
                            className={`r-chart ${
                              !showRadial1 ? "show" : "hide"
                            }`}
                          >
                            <div className="mb-1 mid-card-content">
                              <h1 className="mt-1 mb-3">
                                {connectMetrics.noOfConnections}
                              </h1>
                              <span
                                className={`text-success ${
                                  connectMetrics.noOfConnections < 7
                                    ? "text-danger"
                                    : ""
                                }`}
                              >
                                {" "}
                                +0%{" "}
                              </span>
                            </div>
                            <div className="mb-1">
                              <span className="text-muted">
                                compared to last week
                              </span>
                            </div>
                          </div>
                          <div
                            className={`r-chart ${
                              showRadial1 ? "show" : "hide"
                            }`}
                          >
                            <RadialChart
                              value={connectMetrics.no_of_con_percentage}
                            />

                            <span className="percentage d-flex justify-content-center">
                              {connectMetrics.no_of_con_percentage}%
                            </span>
                            <span className="reach-text d-flex justify-content-center">
                              Reached
                            </span>

                            <span className="reach-btm-text d-flex justify-content-center">
                              Compared to last week
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="card tiny-cards">
                        <div className="card-body">
                          <div
                            onClick={() => setShowRadial2(!showRadial2)}
                            className="d-flex justify-content-between top-card-content"
                          >
                            <h5 className="card-title mb-4">
                              No. of Telephone numbers
                            </h5>
                            <i className="bi bi-circle-half moon"></i>
                          </div>
                          <div
                            className={`r-chart ${
                              !showRadial2 ? "show" : "hide"
                            }`}
                          >
                            <div className="mb-1 mid-card-content">
                              <h1 className="mt-1 mb-3">
                                {connectMetrics.noOfTelephone}
                              </h1>
                              <span className="text-success"> +0% </span>
                            </div>
                            <div className="mb-1">
                              <span className="text-muted">
                                compared to last week
                              </span>
                            </div>
                          </div>
                          <div
                            className={`r-chart ${
                              showRadial2 ? "show" : "hide"
                            }`}
                          >
                            <RadialChart value={connectMetrics.no_of_tel_per} />
                            <span className="percentage d-flex justify-content-center">
                              {connectMetrics.no_of_tel_per}%
                            </span>
                            <span className="reach-text d-flex justify-content-center">
                              Reached
                            </span>
                            <span className="reach-btm-text d-flex justify-content-center">
                              Compared to last week
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card tiny-cards">
                        <div className="card-body">
                          <div
                            onClick={() => setShowRadial3(!showRadial3)}
                            className="d-flex justify-content-between top-card-content"
                          >
                            <h5 className="card-title mb-4">
                              No. of Emails Collected
                            </h5>
                            <i className="bi bi-circle-half moon"></i>
                          </div>
                          <div
                            className={`r-chart ${
                              !showRadial3 ? "show" : "hide"
                            }`}
                          >
                            <div className="mb-1 mid-card-content">
                              <h1 className="mt-1 mb-3">
                                {connectMetrics.noOfEmailsCollected}
                              </h1>
                              <span className="text-success"> +0% </span>
                            </div>
                            <div className="mb-1">
                              <span className="text-muted">
                                compared to last week
                              </span>
                            </div>
                          </div>
                          <div
                            className={`r-chart ${
                              showRadial3 ? "show" : "hide"
                            }`}
                          >
                            <RadialChart
                              value={connectMetrics.no_of_emails_per}
                            />

                            <span className="percentage d-flex justify-content-center">
                              {connectMetrics.no_of_emails_per}%
                            </span>
                            <span className="reach-text d-flex justify-content-center">
                              Reached
                            </span>

                            <span className="reach-btm-text d-flex justify-content-center">
                              Compared to last week
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="card tiny-cards">
                        <div className="card-body">
                          <div
                            onClick={() => setShowRadial4(!showRadial4)}
                            className="d-flex justify-content-between top-card-content"
                          >
                            <h5 className="card-title mb-4">
                              No. of First Replies
                            </h5>
                            <i className="bi bi-circle-half moon"></i>
                          </div>
                          <div
                            className={`r-chart ${
                              !showRadial4 ? "show" : "hide"
                            }`}
                          >
                            <div className="mb-1 mid-card-content">
                              <h1 className="mt-1 mb-3">
                                {connectMetrics.noOfFirstReplies}
                              </h1>
                              <span className="text-success"> +0% </span>
                            </div>
                            <div className="mb-1">
                              <span className="text-muted">
                                compared to last week
                              </span>
                            </div>
                          </div>
                          <div
                            className={`r-chart ${
                              showRadial4 ? "show" : "hide"
                            }`}
                          >
                            <RadialChart
                              value={connectMetrics.no_of_replies_per}
                            />

                            <span className="percentage d-flex justify-content-center">
                              {connectMetrics.no_of_replies_per}%
                            </span>
                            <span className="reach-text d-flex justify-content-center">
                              Reached
                            </span>

                            <span className="reach-btm-text d-flex justify-content-center">
                              Compared to last week
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-xxl-7">
                <div className="card flex-fill w-100">
                  <div className="card-header chart-card-text d-flex justify-content-start">
                    <h5 className="card-title mt-2">Connection per week</h5>
                    {/* {JSON.stringify(connectGraph)} */}
                  </div>
                  <div className="card-body py-3">
                    <StackedBarChart />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-lg-12 col-xxl-12 d-flex">
                <div className="card flex-fill">
                  <div className="card-header table-card-head d-flex justify-content-between">
                    <h5 className="card-title mb-0 table-title">Connections</h5>
                    <div className="table-attr">
                      <CSVLink
                        data={connectionsData}
                        download="Reachio-Clients-list.csv"
                        className="csv-link"
                      >
                        <button type="button" className="btn-dashboard">
                          Dashboard list
                        </button>
                      </CSVLink>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover my-1">
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
                          <th>Connected Status</th>
                          <th className="d-none d-md-table-cell">
                            Connected on
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {connectionsData.map((thisConnectionData, index) => {
                          return (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{thisConnectionData.Name}</td>
                              <td className="d-none d-xl-table-cell">
                                {thisConnectionData.ContactEmail}
                              </td>
                              <td className="d-none d-xl-table-cell">
                                {thisConnectionData.ContactMobile}
                              </td>
                              <td>
                                <span>
                                  {thisConnectionData.ConnectionStatus}
                                </span>
                              </td>
                              <td className="d-none d-md-table-cell">
                                {thisConnectionData.ConnectedOn}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    <div className="view-more d-flex justify-content-center">
                      <Link to="/users">
                        {" "}
                        <button type="button" className="btn-dashboard-2">
                          View more
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
