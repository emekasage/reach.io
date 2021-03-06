/* eslint-disable react/jsx-key */
import React, { useContext, useEffect, useState } from "react";
import { providerFunctions } from "../provider/FunctionsProvider";
import BarChart from "../components/BarChart";
import moment from "moment";

export default function BuyCreditInner() {
  const {
    showSideBar,
    setShowModal,
    setModalPage,
    creditTransaction,
    transaction,
    userDetails,
    creditUtilization,
    utilization,
    creditUtilized,
    creditGraph,
  } = useContext(providerFunctions);
  const [lastWeekData, setLastWeekData] = useState([]);
  const [thisWeekData, setThisWeekData] = useState([]);
  const [showThisWeek, setShowThisWeek] = useState(true);
  useEffect(() => {
    creditTransaction();
    creditUtilization();
    console.log(creditUtilized);
    var days = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];
    var twd = [];
    var lwd = [];
    for (var i = 0; i < days.length; i++) {
      var today = days[i];
      if (
        typeof creditUtilized.utilization !== "undefined" &&
        typeof creditUtilized.deposit !== "undefined"
      ) {
        if (
          typeof creditUtilized.utilization.thisWeekData !== "undefined" &&
          typeof creditUtilized.deposit.thisWeekData !== "undefined" &&
          typeof creditUtilized.utilization.lastWeekData !== "undefined" &&
          typeof creditUtilized.deposit.lastWeekData !== "undefined"
        ) {
          twd.push({
            name: today,
            uv: creditUtilized.utilization.thisWeekData[today],
            pv: creditUtilized.deposit.thisWeekData[today],
            amt: 0,
          });
          lwd.push({
            name: today,
            uv: creditUtilized.utilization.lastWeekData[today],
            pv: creditUtilized.deposit.lastWeekData[today],
            amt: 0,
          });
        }
      }
    }
    setLastWeekData(lwd);
    setThisWeekData(twd);
    // var thisWeekData = [];
    // var lastWeekData = [];
    creditGraph();
  }, [creditUtilized]);

  const [creditData, setCreditData] = useState([]);
  const [creditUsed, setCreditUsed] = useState([]);

  useEffect(() => {
    console.log(transaction.transaction);
    if (typeof transaction.transaction !== "undefined") {
      if (typeof transaction.transaction.data !== "undefined") {
        setCreditData(transaction.transaction.data);
      }
    }
  }, [transaction]);

  useEffect(() => {
    console.log(utilization.transaction);
    if (typeof utilization.transaction !== "undefined") {
      if (typeof utilization.transaction.data !== "undefined") {
        setCreditUsed(utilization.transaction.data);
        console.log(utilization.transaction.data);
      }
    }
  }, [utilization]);

  useEffect(() => {
    // console.log(userDetails);
    if (typeof userDetails.userCredit !== "undefined") {
      console.log(userDetails.userCredit);
      // setCreditData(transaction.transaction.data);
    }
  }, [transaction]);

  useEffect(() => {
    console.log(creditData);
    console.log(creditUsed);
  }, [creditData, creditUsed]);

  const [paginatedClients, setpaginatedClients] = useState([]);
  const [TransactionToDisplay, setTransactionToDisplay] = useState([]);
  const [page] = useState(1);
  const [perPage] = useState(10);
  const [viewAll] = useState(false);

  useEffect(() => {
    getpaginatedClients(page);
  }, [page, creditData]);

  useEffect(() => {
    if (viewAll) {
      setTransactionToDisplay(creditData);
    } else {
      setTransactionToDisplay(paginatedClients);
    }
  }, [viewAll, creditData, paginatedClients]);

  const getpaginatedClients = (page) => {
    // var no_of_clients = creditData.length;
    // setNumberOfClient(no_of_clients);
    // setPageCount(Math.ceil(Number(no_of_clients) / Number(perPage)));
    var cc = creditData.filter((thisdata, index) => {
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

  return (
    <div className={`pagebody ${showSideBar ? "" : "expand"}`}>
      <div className="container-fluid p-0">
        <div className="d-flex justify-content-between user-val">
          <div className="heading-col">
            <h5>
              <strong>Credit</strong>
            </h5>
          </div>
        </div>

        <div className="credit-dtls">
          <div className="total-credit">
            <h6>Your total credit</h6>
            <p>
              {typeof userDetails.userCredit.amount !== "undefined"
                ? userDetails.userCredit.amount
                : 0}
            </p>
          </div>

          <div className="credit-btn d-flex align-items-center">
            <button
              onClick={() => {
                setShowModal(true);
                setModalPage("credit-modal");
              }}
            >
              Buy Credit
            </button>
          </div>
        </div>

        <div className="row pro-tab">
          <div className="col-sm-12">
            <div className="card credit-chart">
              <div className="card-body">
                <div className="chart-props">
                  <div className="d-flex align-items-center prop-txt">
                    <i className="bi bi-dot first-dot"></i>
                    <span>Purchase</span>
                    <i className="bi bi-dot sec-dot"></i>
                    <span>Utilization</span>
                  </div>
                  <select
                    className="form-select prop-drp"
                    onChange={(e) => {
                      if (e.target.value == "this-week") {
                        setShowThisWeek(true);
                      } else {
                        setShowThisWeek(false);
                      }
                    }}
                  >
                    <option value="this-week" selected>
                      This Week
                    </option>
                    <option value="last-week">Last Week</option>
                  </select>
                </div>

                <div className="">
                  <BarChart
                    lastWeekData={lastWeekData}
                    thisWeekData={thisWeekData}
                    showThisWeek={showThisWeek}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="heading-col user-val">
            <h5 style={{ paddingTop: "20px" }}>
              <strong>Latest transaction</strong>
            </h5>
          </div>

          <div className="col-sm-12">
            <div className="card credit-trsc">
              <div className="card-body">
                <ul
                  className="nav nav-pills mb-3 crd-tabs"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-dep-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-deposit"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Deposit
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-util-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-utilize"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Utilization
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-deposit"
                    role="tabpanel"
                    aria-labelledby="pills-dep-tab"
                  >
                    <div className="table-responsive">
                      <table className="table table-hover my-1 crd-table">
                        <thead>
                          <tr>
                            <th style={{ width: "10%" }}>S/N</th>
                            <th style={{ width: "30%" }}>Date</th>
                            <th style={{ width: "50%" }}>Credit</th>
                            <th style={{ width: "10%" }}>Cost</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TransactionToDisplay.map((thisTransactionData) => {
                            return (
                              <tr>
                                <td>
                                  <i className="bi bi-arrow-up-right-circle"></i>
                                </td>
                                <td>
                                  {moment(
                                    thisTransactionData.created_at
                                  ).format("lll")}
                                </td>
                                <td>{thisTransactionData.credits}</td>
                                <td>
                                  {"??"}
                                  {thisTransactionData.amount}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-utilize"
                    role="tabpanel"
                    aria-labelledby="pills-util-tab"
                  >
                    <div className="table-responsive">
                      <table className="table table-hover my-1 crd-table">
                        <thead>
                          <tr>
                            <th style={{ width: "10%" }}>S/N</th>
                            <th style={{ width: "20%" }}>Date</th>
                            <th style={{ width: "20%" }}>Transaction type</th>
                            <th style={{ width: "40%" }}>Campaign</th>
                            <th style={{ width: "10%" }}>Credit</th>
                          </tr>
                        </thead>
                        <tbody>
                          {creditUsed.map((thisCreditUsed) => {
                            return (
                              <tr>
                                <td>
                                  <i className="bi bi-arrow-down-left-circle"></i>
                                </td>
                                <td>
                                  {moment(thisCreditUsed.created_at).format(
                                    "lll"
                                  )}
                                </td>
                                <td>{thisCreditUsed.transaction_type}</td>
                                <td>{thisCreditUsed.campaign}</td>
                                <td>{thisCreditUsed.credits}</td>
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
        </div>
      </div>
    </div>
  );
}
