import React, { useContext, useState } from "react";
import { providerFunctions } from "../../provider/FunctionsProvider";
import RadialChart from "../../components/RadialChart";
import StackedBarChart from "../../components/StackedBarChart";
import { Link } from "react-router-dom";

export default function DashboardInner() {
  const [showRadial1, setShowRadial1] = useState(false);
  const [showRadial2, setShowRadial2] = useState(false);
  const [showRadial3, setShowRadial3] = useState(false);
  const [showRadial4, setShowRadial4] = useState(false);
  const { showSideBar } = useContext(providerFunctions);

  return (
    <div className={`pagebody ${showSideBar ? "" : "expand"}`}>
      <div className="dashboardbox">
        <main className="content">
          <div className="container-fluid p-0">
            <div className="d-flex justify-content-between inner-text">
              <div className="heading-col">
                <h5>
                  <strong>Overview:</strong> Campaign 1
                </h5>
              </div>

              <div className="text-drop">
                <span className="text-drop-p">Change Campaign:</span>

                <select
                  className="form-select form-select-sm"
                  aria-label="Default select example"
                >
                  <option selected>Campaign 1</option>
                  <option value="1">Campaign 2</option>
                  <option value="2">Campaign 3</option>
                  <option value="3">Campaign 4</option>
                </select>
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
                              No. of Emails Collected
                            </h5>
                            <i className="bi bi-circle-half moon"></i>
                          </div>
                          <div
                            className={`r-chart ${
                              !showRadial1 ? "show" : "hide"
                            }`}
                          >
                            <div className="mb-1 mid-card-content">
                              <h1 className="mt-1 mb-3">100</h1>
                              <span className="text-success"> +34% </span>
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
                            <RadialChart value="50" />

                            <span className="percentage d-flex justify-content-center">
                              25%
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
                              <h1 className="mt-1 mb-3">100</h1>
                              <span className="text-success"> +34% </span>
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
                            <RadialChart value="50" />
                            <span className="percentage d-flex justify-content-center">
                              25%
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
                              <h1 className="mt-1 mb-3">100</h1>
                              <span className="text-success"> +34% </span>
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
                            <RadialChart value="50" />

                            <span className="percentage d-flex justify-content-center">
                              25%
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
                              <h1 className="mt-1 mb-3">100</h1>
                              <span className="text-success"> +34% </span>
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
                            <RadialChart value="50" />

                            <span className="percentage d-flex justify-content-center">
                              25%
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
                    <StackedBarChart />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-lg-12 col-xxl-12 d-flex">
                <div className="card flex-fill">
                  <div className="card-header table-card-head d-flex justify-content-between">
                    <h5 className="card-title mb-0 table-title">Clients</h5>
                    <button type="button" className="btn-dashboard">
                      Dashboard list
                    </button>
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
                      <tr>
                        <td>1</td>
                        <td>Cameron Williamson</td>
                        <td className="d-none d-xl-table-cell">
                          ronaldrich@gmail.com
                        </td>
                        <td className="d-none d-xl-table-cell">
                          (405) 555-0128
                        </td>
                        <td>
                          <span className="badge bg-success">Yes</span>
                        </td>
                        <td className="d-none d-md-table-cell">
                          Jan 12th, 2021
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Savannah Nguyen</td>
                        <td className="d-none d-xl-table-cell">
                          robertfox@gmail.com
                        </td>
                        <td className="d-none d-xl-table-cell">
                          (208) 555-0112
                        </td>
                        <td>
                          <span className="badge bg-success">Yes</span>
                        </td>
                        <td className="d-none d-md-table-cell">
                          Jan 12th, 2021
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Brooklyn Simmons</td>
                        <td className="d-none d-xl-table-cell">
                          ronaldrich@gmail.com
                        </td>
                        <td className="d-none d-xl-table-cell">
                          (603) 555-0123
                        </td>
                        <td>
                          <span className="badge bg-danger">No</span>
                        </td>
                        <td className="d-none d-md-table-cell">-</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Courtney Henry</td>
                        <td className="d-none d-xl-table-cell">
                          bassiecooper@gmail.com
                        </td>
                        <td className="d-none d-xl-table-cell">
                          (201) 555-0124
                        </td>
                        <td>
                          <span className="badge bg-success">Yes</span>
                        </td>
                        <td className="d-none d-md-table-cell">
                          Jan 12th, 2021
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Alene McCoy</td>
                        <td className="d-none d-xl-table-cell">
                          bassiecooper@gmail.com
                        </td>
                        <td className="d-none d-xl-table-cell">
                          (302) 555-0107
                        </td>
                        <td>
                          <span className="badge bg-danger">No</span>
                        </td>
                        <td className="d-none d-md-table-cell">-</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Darlene Robertson</td>
                        <td className="d-none d-xl-table-cell">
                          robertfox@gmail.com
                        </td>
                        <td className="d-none d-xl-table-cell">
                          (671) 555-0110
                        </td>
                        <td>
                          <span className="badge bg-success">Yes</span>
                        </td>
                        <td className="d-none d-md-table-cell">
                          Jan 12th, 2021
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Robbie Shapiro</td>
                        <td className="d-none d-xl-table-cell">
                          robertfox@gmail.com
                        </td>
                        <td className="d-none d-xl-table-cell">
                          (671) 555-0110
                        </td>
                        <td>
                          <span className="badge bg-success">Yes</span>
                        </td>
                        <td className="d-none d-md-table-cell">
                          Jan 12th, 2021
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>Project Wombat</td>
                        <td className="d-none d-xl-table-cell">
                          prwombat@gmail.com
                        </td>
                        <td className="d-none d-xl-table-cell">
                          (405) 555-0128
                        </td>
                        <td>
                          <span className="badge bg-warning">In progress</span>
                        </td>
                        <td className="d-none d-md-table-cell">-</td>
                      </tr>
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
