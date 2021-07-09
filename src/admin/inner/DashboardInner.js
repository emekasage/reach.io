import React, { useContext, useState, useEffect } from "react";
import { providerFunctions } from "../../provider/FunctionsProvider";
import RadialChart from "../../components/RadialChart";
import StackedBarChartAdmin from "../../components/StackedBarChartAdmin";
import { Link } from "react-router-dom";
import moment from "moment";
import { CSVLink } from "react-csv";

export default function DashboardInner() {
  const [showRadial1, setShowRadial1] = useState(false);
  const [showRadial2, setShowRadial2] = useState(false);
  const [showRadial3, setShowRadial3] = useState(false);
  const [showRadial4, setShowRadial4] = useState(false);
  const [clientsData, setClientsData] = useState([]);

  const {
    showSideBar,
    allUsers,
    getAllUsers,
    getMetrics,
    metrics,
    metricsGraph,
    getGraph,
  } = useContext(providerFunctions);

  const [overviewCampaign, setOverviewCampaign] = useState({});
  const [overviewCredit, setOverviewCredit] = useState({});
  const [overviewConnection, setOverviewConnection] = useState({});
  const [overviewUsers, setOverviewUsers] = useState({});

  useEffect(() => {
    getAllUsers();
    getGraph();
    getMetrics();
  }, []);
  useEffect(() => {
    if (typeof allUsers.Users !== "undefined") {
      setClientsData(allUsers.Users);
    }
  }, [allUsers]);

  useEffect(() => {
    if (typeof metrics.overview !== "undefined") {
      if (typeof metrics.overview.campaign !== "undefined") {
        setOverviewCampaign(metrics.overview.campaign);
      }
    }
  }, [metrics]);

  useEffect(() => {
    if (typeof metrics.overview !== "undefined") {
      if (typeof metrics.overview.credit !== "undefined") {
        setOverviewCredit(metrics.overview.credit);
      }
    }
  }, [metrics]);

  useEffect(() => {
    if (typeof metrics.overview !== "undefined") {
      if (typeof metrics.overview.connection !== "undefined") {
        setOverviewConnection(metrics.overview.connection);
      }
    }
  }, [metrics]);

  useEffect(() => {
    if (typeof metrics.overview !== "undefined") {
      if (typeof metrics.overview.users !== "undefined") {
        setOverviewUsers(metrics.overview.users);
      }
    }
  }, [metrics]);

  useEffect(() => {
    // console.log(metricsGraph.data.thur);
  }, [metricsGraph]);

  return (
    <div className={`pagebody ${showSideBar ? "" : "expand"}`}>
      <div className="dashboardbox">
        <main className="content">
          <div className="container-fluid p-0">
            <div className="d-flex justify-content-between inner-text">
              <div className="heading-col">
                <h5>
                  <strong>Overview:</strong>
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
                              Total no. of Campaign
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
                                {metrics.all_campaigns}
                              </h1>
                              <span
                                className={`text-success ${
                                  overviewCampaign.weeklyTotal <
                                  overviewCampaign.lastWeekTotal
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
                            <RadialChart value={overviewCampaign.percentage} />

                            <span className="percentage d-flex justify-content-center">
                              {overviewCampaign.percentage}%
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
                              Total no. of Clients
                            </h5>
                            <i className="bi bi-circle-half moon"></i>
                          </div>
                          <div
                            className={`r-chart ${
                              !showRadial2 ? "show" : "hide"
                            }`}
                          >
                            <div className="mb-1 mid-card-content">
                              <h1 className="mt-1 mb-3">{metrics.users}</h1>
                              <span
                                className={`text-success ${
                                  overviewUsers.weeklyTotal <
                                  overviewUsers.lastWeekTotal
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
                              showRadial2 ? "show" : "hide"
                            }`}
                          >
                            <RadialChart value={overviewUsers.percentage} />
                            <span className="percentage d-flex justify-content-center">
                              {overviewUsers.percentage}%
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
                              Total Credit Purchased
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
                                {overviewCredit.weeklyTotal}
                              </h1>
                              <span
                                className={`text-success ${
                                  overviewCredit.weeklyTotal <
                                  overviewCredit.lastWeekTotal
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
                              showRadial3 ? "show" : "hide"
                            }`}
                          >
                            <RadialChart value={overviewCampaign.percentage} />

                            <span className="percentage d-flex justify-content-center">
                              {overviewCampaign.percentage}%
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
                              Total no. of Contacts
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
                                {overviewConnection.weeklyTotal}
                              </h1>
                              <span
                                className={`text-success ${
                                  overviewConnection.weeklyTotal <
                                  overviewConnection.lastWeekTotal
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
                              showRadial4 ? "show" : "hide"
                            }`}
                          >
                            <RadialChart
                              value={overviewConnection.percentage}
                            />

                            <span className="percentage d-flex justify-content-center">
                              {overviewConnection.percentage}%
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
                  </div>
                  <div className="card-body py-3">
                    <StackedBarChartAdmin />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-lg-12 col-xxl-12 d-flex">
                <div className="card flex-fill">
                  <div className="card-header table-card-head d-flex justify-content-between">
                    <h5 className="card-title mb-0 table-title">Clients</h5>
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
                        <th className="d-none d-md-table-cell">Connected on</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clientsData.map((thisClientData, index) => {
                        if (index < 5) {
                          return (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{thisClientData.name}</td>
                              <td className="d-none d-xl-table-cell">
                                {thisClientData.email}
                              </td>
                              <td className="d-none d-xl-table-cell">
                                {thisClientData.phone}
                              </td>
                              <td>
                                <span>
                                  {thisClientData.connected_status === 1 && (
                                    <>Yes</>
                                  )}
                                  {thisClientData.connected_status === 0 && (
                                    <>No</>
                                  )}
                                </span>
                              </td>
                              <td className="d-none d-md-table-cell">
                                {moment(thisClientData.created_at).format(
                                  "lll"
                                )}
                              </td>
                            </tr>
                          );
                        }
                      })}
                    </tbody>
                  </table>
                  <div className="view-more d-flex justify-content-center">
                    <Link to="/admin/clients">
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
        </main>
      </div>
    </div>
  );
}
